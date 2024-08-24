import React, { useEffect, useState } from 'react'
import styles from './StocksData.module.css'
import Table from './Table';
import Loader from '../loader/Loader';

const StocksData = () => {

    const [error, setError]= useState(null);
    const [loadingData, setLoadingData]= useState(null);
    const [stockData,setStockData] =useState(null);
    const [company, setCompany] = useState('');
    const [showData, setShowData] = useState(false);

    const companyNameHandler = (event) => {
        setCompany(event.target.value);
    }

    const period= 'WEEKLY';

    async function fetchStockDataHandler(){
        setError(null);
        try {
            const response = await fetch (`https://www.alphavantage.co/query?function=TIME_SERIES_${period}&symbol=${company}&interval=5min&apikey=UUW7MXF6QF1U06FS`);
            if(!response.ok){
                throw new Error ('Something went wrong');
            }
            setShowData(false);
            setLoadingData(true);
            const data= await response.json();
            setStockData(data);

            const dataEntries = Object.entries(data["Weekly Time Series"]);
            dataEntries.sort((a, b) => new Date(b[0]) - new Date(a[0]));
            const latest7Entries = dataEntries.slice(0, 7);
            const filteredData = Object.fromEntries(latest7Entries);

            function removeLeadingNumbers(obj) {
                const newObj = {};
                for (const [key, value] of Object.entries(obj)) {
                  const newKey = key.replace(/^\d+\.\s*/, ''); 
                  newObj[newKey] = value;
                }
                return newObj;
              }
              const newFilteredData=removeLeadingNumbers(filteredData)
              setStockData(newFilteredData)
            console.log(filteredData);
            setError(false);
            
        }catch (error){
            setError(ture);
            setLoadingData(false);
        }
        setShowData(true);
        setLoadingData(null);
    }
    useEffect(()=>{
        console.log('e');
    },[showData,error]

    )

    return (
        <div className={styles.Data}>
            <div className={styles.dataInput}>
                <label htmlFor="Name" id='Name'> Enter Stock Name</label>
                <input type="text" onBlur={companyNameHandler} placeholder='eg: IBM, Meta'/>
            </div>
            <button onClick={fetchStockDataHandler}>GET PRICES</button>
            {showData && <Table filteredData={stockData}/>}
            {loadingData && <Loader/>}
            {error && <p>Please enter a valid stock name like IBM, Meta</p>}
        </div>
  )
}

export default StocksData