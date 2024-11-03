import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [searchTerm, page]);

  const fetchData = async () => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`);
    setData(response.data.hits);
  };

  return (
    <div>
      <h2>Welcome, {localStorage.getItem('username')}</h2>
      <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {data.map((item) => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Dashboard;
