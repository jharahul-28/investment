import React from 'react'
import './Bonds.css';

const Bonds = () => {
    return (
        <div className='bonds'>
            <p>BONDS</p>
            <div className='bond'>
                <p>
                    Looking for a safe and stable investment option that offers reliable returns? Look no further than our bond market investment options. Our investment startup provides access to a range of high-quality bonds that offer consistent returns and help diversify your investment portfolio.
                </p>
                <p>
                    Why invest in bonds? Bonds are debt securities that offer regular interest payments and the return of principal when they mature. This makes them a reliable investment option for those seeking to generate steady income or preserve capital. Our investment team has years of experience in analyzing bond markets, selecting high-quality bonds, and managing risk to provide the best possible returns for our clients.
                </p>
                <p>
                    Our bond market options include a variety of corporate and government bonds, as well as fixed-income funds that offer exposure to a diversified portfolio of bonds. Whether you're a seasoned investor or just getting started, our investment startup has the expertise and resources to help you make informed investment decisions and achieve your financial goals.
                    Ready to invest in the future? Contact us today to learn more about our bond market options and start building your investment portfolio.
                </p>
            </div>
            <div className="accordionss">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Sovereign Gold Bonds
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>Sovereign Gold Bonds:</strong>  Issued by the Government of India, Sovereign Gold Bonds are denominated in grams of gold and offer a fixed interest rate of 2.50% per annum, payable semi-annually. These bonds have been popular among investors due to their relatively low risk and the potential for returns from both the interest payments and the appreciation of gold prices.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Corporate Bonds
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>Corporate Bonds:</strong>  Several Indian companies have issued corporate bonds in recent years, with some offering attractive yields and relatively low risk. Some well-performing corporate bonds include the NTPC 10-year bond, the Tata Motors 5-year bond, and the HDFC Bank 10-year bond.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Tax-free bonds:
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>Tax-free bonds:</strong> Tax-free bonds: Tax-free bonds are issued by government-backed entities such as National Highways Authority of India (NHAI), Indian Railway Finance Corporation (IRFC), and Power Finance Corporation (PFC). These bonds offer tax-free returns to investors and have historically performed well.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonds
