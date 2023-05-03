import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Connection() {
  const [trashHistory, setTrashHistory] = useState([]);

  useEffect(() => {
    // Make API request to get trash level history data
    axios.get('https://localhost:5000/trash-level')
      .then(response => {
        setTrashHistory(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Smart Trash Can</h1>
      <p>Current Trash Level: {trashHistory.length > 0 ? trashHistory[trashHistory.length - 1].trash_level + "%" : "Loading..."}</p>
      <h2>Trash Level History</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Trash Level</th>
          </tr>
        </thead>
        <tbody>
          {trashHistory.map(entry => (
            <tr key={entry.timestamp}>
              <td>{entry.timestamp}</td>
              <td>{entry.trash_level}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Connection;
