import React from 'react';
import styles from './Table.module.css';

const Table = ({filteredData}) => {
    const tableHeaders = Object.keys(filteredData[Object.keys(filteredData)[0]]);
  return (
    <table className={styles.tabularData}>
      <thead>
        <tr>
          <th>Date</th>
          {tableHeaders.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {Object.entries(filteredData).map(([date, values]) => (
          <tr key={date}>
            <td>{date}</td>
            {Object.values(values).map((value, index) => <td key={index}>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table