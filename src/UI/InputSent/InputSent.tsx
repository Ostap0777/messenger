import React from 'react'
import styles from './inputSent.module.scss'
import { ArrowRight } from 'lucide-react';


export default function InputSent() {
  return (
	 <section className={styles.sent__section}>
		<form className={styles.form__sent} action="">
			<input className={styles.form__input} type="text" name="" id="" placeholder='Ваше повідомлення' />
		</form>
		<button>
	   	<ArrowRight size={44} className={styles.button__sent}/>
		</button>
	 </section>
  )
}
