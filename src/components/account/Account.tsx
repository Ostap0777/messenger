import React from 'react'
import styles from './account.module.scss'
import SideBar from '../sideBar/sideBar'
import { Link } from 'react-router-dom'

export default function Account() {
  return (
	<>

	  <div className={styles.account__container}>
	  <SideBar/>
	    <div className={styles.account__message}>
			<p className={styles.message__text}>Ласкаво просимо в наш месенджер, <br />персональний кабінет ще у розробці. <br /> Гарного дня!</p>
			<Link  to={'/'}>
			  <p className={styles.message__link}>Перейти в чат</p>
			</Link>
			</div>
	  </div>
	 </>
  )
}
