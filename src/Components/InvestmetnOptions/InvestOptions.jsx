import React from 'react'
import style from './InvestmentOptions.module.css';
import HeadingWrapper from '../Store/HeadingWrapper';
import Stocks from './Stocks';
import Bonds from './Bonds';
import MutualFund from './MutualFund';

const InvestOptions = () => {
  return (
    <>
        <HeadingWrapper desc='INVESTMENT OPTIONS'/>
        <Stocks/>
        <Bonds/>
        <MutualFund/>
    </>
  )
}

export default InvestOptions;