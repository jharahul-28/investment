import React from 'react'
import HeadingWrapper from './Store/HeadingWrapper';
import './Membership.css';

const Membership = () => {
    return (
        <>
            <HeadingWrapper desc='MEMBERSHIP' />
            <div className="costCard">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">₹500 p/a</h5>
                        <p className="card-text">Expert advice for stock and bond market</p>
                        <a href="#" className="card-link">Buy Now</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">₹1000 p/a</h5>
                        <p className="card-text">Expert advice for stock and bond market, zero brokerage charge</p>
                        <a href="#" className="card-link">Buy Now</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">₹2000 p/a</h5>
                        <p className="card-text">Expert advice for stock and bond market, zero brokerage charge, journals, editorials and sesions for profitable investment</p>
                        <a href="#" className="card-link">Buy Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Membership;