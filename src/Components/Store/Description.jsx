import React from 'react'
import style from './Description.module.css';

const Description = (props) => {
  return (
    <div className={style.description}>
        {props.children}
    </div>
  )
}

export default Description
