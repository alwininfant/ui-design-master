import React, { useState, useEffect } from 'react';
import Home from './pages/home/home.js'; // Ensure you have the correct path to the Home component
import Filter from './componets/Filter.js';
import Header from './componets/Header.js';
import Navbar from './componets/Navbar.js';

const App = () => {
  const [trademarks, setTrademarks] = useState([]);
  const [filteredTrademarks, setFilteredTrademarks] = useState([]);
  const [owners, setOwners] = useState([]);
  const [lawFirms, setLawFirms] = useState([]);
  const [attorneys, setAttorneys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9600/body');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const extractedTrademarks = data.hits.hits.map(hit => hit._source);
        setTrademarks(extractedTrademarks);
        setFilteredTrademarks(extractedTrademarks);
        const dummyOwners = data.aggregations.current_owners.buckets;
        const dummyLawFirms = data.aggregations.class_codes.buckets;
        const dummyAttorneys = data.aggregations.attorneys.buckets;

        setOwners(dummyOwners);
        setLawFirms(dummyLawFirms);
        setAttorneys(dummyAttorneys);
      } catch (error) {
        console.error('There was a problem with fetching trademark data:', error);
      }
    };

    fetchData();
  }, []);
  const handleSearch1 = ({ selectedOwners, selectedFirms, selectedAttorneys }) => {
    const filtered = trademarks.filter(trademark => {
      return (
        (selectedOwners.length === 0 || selectedOwners.includes(trademark.current_owner)) &&
        (selectedFirms.length === 0 || selectedFirms.includes(trademark.class_codes)) &&
        (selectedAttorneys.length === 0 || selectedAttorneys.includes(trademark.attorneys))
      );
    });

    setFilteredTrademarks(filtered);
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredTrademarks(trademarks);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filtered = trademarks.filter(trademark => {
      const { mark_identification, current_owner, attorneys = [], class_codes = [] } = trademark;

      return (
        mark_identification.toLowerCase().includes(lowerCaseQuery) ||
        (current_owner && current_owner.toLowerCase().includes(lowerCaseQuery)) ||
        (Array.isArray(attorneys) && attorneys.some(attorney => attorney.toLowerCase().includes(lowerCaseQuery))) ||
        (Array.isArray(class_codes) && class_codes.some(code => code.toLowerCase().includes(lowerCaseQuery)))
      );
    });

    setFilteredTrademarks(filtered);
  };



  return (
    <div>
      <Header handleSearch={handleSearch} /> {/* Pass handleSearch to Header */}
      <Navbar />
      <div className="flex w-full">
        <div className="w-3/4 p-4">
          <Home trademarks={filteredTrademarks} /> {/* Use filtered data */}
        </div>
        <div className="w-1/4 p-4">
          <Filter owners={owners} lawFirms={lawFirms} attorneys={attorneys} onSearch={handleSearch1} />
        </div>
      </div>
    </div>
  );
};

export default App;
