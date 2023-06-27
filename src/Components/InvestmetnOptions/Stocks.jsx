import React from 'react'
import style from './Stocks.module.css';
import handpick from '../../assets/handpick.svg';
import expertAdvice from '../../assets/expert-advice.svg';
import ai from '../../assets/ai.svg';

const Stocks = () => {
    return (
        <div className={style.stock}>
            <p>STOCKS</p>
                <p>
                    Are you looking to invest in the stock market but don't know where to start? Look no further than Alpha Asset Management, the premier investment startup that makes stock market investing simple, smart, and profitable. Our team of experienced investment professionals has a deep understanding of the stock market, with years of expertise in analyzing and selecting stocks that offer the best potential for growth and value. With our cutting-edge technology and data-driven approach, we're able to identify market trends and opportunities that other investors might miss. But we're not just about picking stocks – we're committed to helping you achieve your financial goals. That's why we offer a range of investment options tailored to your needs and risk tolerance, from individual stocks to diversified portfolios. Join us on this exciting journey to build your wealth and achieve financial independence. Invest in Alpha Aset Management today and let us help you make the most of the stock market. Contact us now to learn more about this exciting investment opportunity.
                </p>

            <div className={style.salientFeatures}>
                <div className={style.salientFeature}>
                    <img src={handpick} alt="" />
                    <p>Handpicked Stocks</p>
                </div>
                <div className={style.salientFeature}>
                    <img src={expertAdvice} alt="" />
                    <p>Expert Advice</p>
                </div>
                <div className={style.salientFeature}>
                    <img src={ai} alt="" />
                    <p>AI Assistance</p>
                </div>
            </div>
        </div>
    )
}

export default Stocks
