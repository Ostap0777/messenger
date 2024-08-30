import React from 'react'
import styles from './sideBar.module.scss'
import { CircleUserRound } from 'lucide-react';
import { Settings } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SunMedium } from 'lucide-react';

export default function sideBar( {} ) {
  return (
	 <section className={styles.sidebar__section}>
		<img className={styles.sidebar__logo} src="/ficon-messenger.png" alt="" />
		<div className={styles.sidebar__functional}>
		   <Link className={styles.sidebar__link} to={'/account'}>
			  <CircleUserRound size={36}  />
		  </Link>
		  <Link className={styles.sidebar__link} to={'/settings'}>
		     <Settings size={36} />
		  </Link>
	 	  <Link className={styles.sidebar__link} to={'/'}>
		     <MessageCircleMore size={36} />
		  </Link>
		</div>
		    <SunMedium className={styles.sidebar__background} size={32} />
	 </section>
  )
}
