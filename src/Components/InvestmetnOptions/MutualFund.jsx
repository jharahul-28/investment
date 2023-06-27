import React from 'react'
import style from './MutualFund.module.css';


const MutualFund = () => {
    return (
        <div className={style.mfund}>
            <p>MUTUAL FUND</p>
            <div className={style.mFs}>
                <div className={style.mF}>
                    <div className={style.mFName}>Mirae Asset Large Cap Fund</div>
                    <div className={style.mFDesc}>This mutual fund has consistently delivered strong returns and has outperformed its benchmark over the long term. The fund invests primarily in large-cap companies with a focus on growth-oriented stocks.</div>
                </div>

                <div className={style.mF}>
                    <div className={style.mFName}>Axis Bluechip Fund: </div>
                    <div className={style.mFDesc}>This mutual fund has a strong track record of delivering consistent returns and has outperformed its benchmark over the long term. The fund primarily invests in blue-chip companies with a focus on quality stocks.</div>
                </div>

                <div className={style.mF}>
                    <div className={style.mFName}>SBI Small Cap Fund: </div>
                    <div className={style.mFDesc}>This mutual fund has a track record of delivering strong returns over the long term and has outperformed its benchmark. The fund invests primarily in small-cap companies with a focus on growth-oriented stocks.</div>
                </div>

                <div className={style.mF}>
                    <div className={style.mFName}>Kotak Emerging Equity Fund:</div>
                    <div className={style.mFDesc}>This mutual fund has delivered strong returns over the long term and has outperformed its benchmark. The fund invests primarily in mid-cap and small-cap companies with a focus on growth-oriented stocks.</div>
                </div>

                <div className={style.mF}>
                    <div className={style.mFName}>ICICI Prudential Banking and Financial Services Fund: </div>
                    <div className={style.mFDesc}>This mutual fund has delivered strong returns over the long term and has outperformed its benchmark. The fund primarily invests in the banking and financial services sector with a focus on quality stocks.</div>
                </div>
            </div>

        </div>
    )
}

export default MutualFund
