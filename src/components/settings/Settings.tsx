import React from 'react'
import styles from './settings.module.scss'
import SideBar from '../sideBar/sideBar'

export default function Settings() {
  return (
	<>
	<div  className={styles.settings__container}>
	  <SideBar />
	  <div className={styles.settings__content}>
		<div className={styles.settings__account}>
			<div className={styles.account__foto}>О</div>
			<div className={styles.account__info}>
				<p className={styles.account__name}>Остап</p>
				<p className={styles.account__number}>+380 96 516 6229</p>
				<p className={styles.account__tag}>@k_osstap</p>
			</div>
		</div>
		<div className={styles.setting__functionals}>
			<div className={styles.functionals__items}>
			   <ul className={styles.functional__item}>
					<li className={styles.functional__link}>General</li>
					<li className={styles.functional__link}>Notifications and Sounds</li>
					<li className={styles.functional__link}>Privacy and Security</li>
					<li className={styles.functional__link}>Data and Storage</li>
					<li className={styles.functional__link}>Active Sessions</li>
					<li className={styles.functional__link}>Appearance</li>
					<li className={styles.functional__link}>Language</li>
					<li className={styles.functional__link}>Stickers and Emoji</li>
					<li className={styles.functional__link}>Chat Folders</li>
				</ul>
				<ul className={styles.functional__item}>
					<li className={styles.functional__link}>Messenger Premium</li>
					<li className={styles.functional__link}>Messenger Business</li>
					<li className={styles.functional__link}>Premium Gifting</li>
				</ul>
				<ul className={styles.functional__item}>
					<li className={styles.functional__link}>Messenger FAQ</li>
					<li className={styles.functional__link}>Ask a Question</li>
				</ul>
			</div>
		</div>
	  </div>
	</div>
	</>

  )
}
