import React from 'react'
import style from './Button.module.css';

const Button = (props) => {
  return (
    <div className={style.button}>
      <p>{props.desc}</p>
    </div>
  )
}

export default Button
