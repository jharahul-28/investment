import React from 'react'
import style from './HeadingWrapper.module.css';

const HeadingWrapper = (props) => {
  return (
    <div className={style.heading}>
        <p>{props.desc}</p>
    </div>
  )
}

export default HeadingWrapper
