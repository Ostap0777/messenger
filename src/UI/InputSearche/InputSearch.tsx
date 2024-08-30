import React, { useState } from 'react'
import styles from './inputSearch.module.scss'
import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import ModalIcon from '../modalAddContact/AddContact'

export default function InputSearch() {
	const [modalActive, setModalActice] = useState(false)
  return (
	 <section className={styles.search__section}>
      <Search size={36} />
		<form action="" className={styles.search__form}>
			<input className={styles.search__input} type="text" name="" id="" />
		</form>
      <Plus onClick={() => setModalActice(true)} className={styles.add__contact} size={36}/>
			<ModalIcon active={modalActive} setActive={setModalActice}/>
	 </section>
	 
  )
}
