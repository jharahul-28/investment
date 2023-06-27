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
                    <span className={style.footerDetails}><IoMail size={'24px'} />: alphaassetmanagement@gmail.com</span>
                    <span className={style.footerDetails}><IoLogoYoutube size={'24px'} />: Alpha Asset Management</span>
                    <span className={style.footerDetails}><BsGlobe2 size={'24px'} />: www.alphaassetmanagement.com</span>
                </div>
                <div className={style.cuRight}>
                    <span className={style.footerDetails}><BsTelephoneFill size={'24px'} />: 9988776655, 0657-556677</span>
                    <span className={style.footerDetails}><ImLocation2 size={'24px'} />: AAM Headquarters, Sector-5, Bangalore</span>
                </div>
            </div>
            <div className={style.footer}>
                <p>Developed with <AiFillHeart color='red' /> by RJ</p>
            </div>
        </div>
    )
}

export default Contact
