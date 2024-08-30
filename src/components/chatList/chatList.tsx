import React, { useEffect, useState } from 'react';
import styles from './chatList.module.scss';
import axios from 'axios';
import InputSearch from '../../UI/InputSearche/InputSearch';


interface ChatListProps {
	className?: string;
	onSelectChat: (chatId: any) => void; 
 }

interface Chat {
	name: string;
	email: string;
 }

export default function ChatList({ className, onSelectChat }: ChatListProps) {
  const [chats, setChats] = useState<Chat[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://messanger-react-1a323-default-rtdb.firebaseio.com/users.json');
        console.log(response.data);
        setChats(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div style={{ width: '35%' }} className={className}>
      <div className={styles.chatlist__content}>
		<InputSearch/>
        {chats.map((chat: Chat, index: number) => (
          <div key={index} className={styles.info__item} onClick={() => onSelectChat(chat)}>
			   <img className={styles.info__foto} src="/ficon-messenger.png" alt="" />
				<div  className={styles.info__contact}>
               <p className={styles.info__name}>{chat.name}</p>
				   <p className={styles.info__text}>Привіт Я Остап. Я сьогодні дуже зацнятий. Завтра відпишу</p>
				</div>
				<span className={styles.info__time}>15:00</span>
          </div>
        ))}
      </div>
    </div>
  );
}
