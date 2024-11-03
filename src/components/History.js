import React from 'react';

function History() {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];

  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
