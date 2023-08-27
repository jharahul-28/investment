import React from 'react'
import style from './Contact.module.css';
import HeadingWrapper from './Store/HeadingWrapper';
import { IoMail } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";

const Contact = () => {
    return (
        <div className={style.cu}>
            <HeadingWrapper desc={"CONTACT US"} />
            <div className={style.cuContainer}>
                <div className={style.cuLeft}>
                    <span className={style.footerDetail}><IoMail size={'24px'} />: alphaassetmanagement@gmail.com</span>
                    <span className={style.footerDetail}><IoLogoYoutube size={'24px'} />: Alpha Asset Management</span>
                    <span className={style.footerDetail}><BsGlobe2 size={'24px'} />: www.alphaassetmanagement.com</span>
                </div>
                <div className={style.cuMid}>
                    <span className={style.footerDetails}>
                        <span><BsTelephoneFill size={'24px'} /> Phone No.:</span>
                        <span className={style.footerMinorDetails}>
                            <span>9988776655</span>
                            <span>0657-556677</span>
                        </span>
                    </span>
                </div>
                <div className={style.cuRight}>
                    <span className={style.footerDetails}>
                        <span><ImLocation2 size={'24px'} />Office:</span>
                        <span className={style.footerMinorDetails}>
                            <span>AAM Headquarters</span>
                            <span>Sector-5</span>
                            <span>Bangalore</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className={style.footer}>
                <p>Developed with <AiFillHeart color='red' /> by RJ</p>
            </div>
        </div>
    )
}

export default Contact
