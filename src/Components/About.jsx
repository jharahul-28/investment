import React from 'react'
import style from './About.module.css';
import HeadingWrapper from './Store/HeadingWrapper';
import Description from './Store/Description';

const About = () => {

  const testimonial2p = ">20%";

  return (
    <div className={style.about}>
      <HeadingWrapper desc='ABOUT US' />
      <div>
        <Description>
          <p>Welcome to Alpha Asset Management! We are a team of experienced investors dedicated to helping you make informed decisions about your financial future.</p>
          <p>At our core, we believe that everyone has the potential to achieve financial independence and build wealth. However, we understand that the world of investing can be complex and intimidating for many people. That's why we're here to provide you with the tools, resources, and guidance you need to navigate the markets and reach your goals.</p>
          <p>Our team has decades of combined experience in a variety of investment strategies, including stocks, bonds, mutual funds, real estate, and more. We believe in taking a holistic approach to investing, looking at your entire financial picture to help you develop a personalized strategy that aligns with your goals and risk tolerance.</p>
          <p>Whether you're just starting to invest or you're a seasoned pro, our website is designed to help you stay up-to-date on the latest market trends, research investment opportunities, and connect with other investors in our community. We offer a variety of resources, including educational articles, market news, investment calculators, and more.</p>
          <p>We are committed to providing you with objective and unbiased information so that you can make informed decisions about your investments. We don't believe in one-size-fits-all solutions - instead, we work with you to develop a personalized strategy that fits your unique needs.</p>
        </Description>
      </div>

      <div className={style.testimonials}>
        <div className={style.testimonial} id={style.testimonial1}>
          <p>12000+</p>
          <p>CUSTOMERS</p>
        </div>
        <div className={style.testimonial} id={style.testimonial2}>
          <p>{testimonial2p}</p>
          <p>RETURN</p>
        </div>
        <div className={style.testimonial} id={style.testimonial3}>
          <p>8</p>
          <p>AREAS OF OPERATION</p>
        </div>
      </div>

    </div>
  )
}

export default About