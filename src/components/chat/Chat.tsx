import React, { useState } from 'react'
import styles from './chat.module.scss'
import SideBar from '../sideBar/sideBar'
import SideList from '../chatList/chatList'
import ChatId from '../chatId/chatId'

export default function Chat() {

	const [selectedChatId, setSelectedChatId] = useState<string | null>(null);


	const handleSelectChat = (chat: string) => {
		setSelectedChatId(chat);
		console.log(chat)
	 };
  return (
	<>
	<div className={styles.chat__container}>
		<div className={styles.chat__left}>
	     <SideBar />
	     <SideList className={styles.chat__list} onSelectChat={handleSelectChat}/>
	   </div>
		<div className={styles.chat__right}>

	   </div>
	</div>
	</>
  )
}
