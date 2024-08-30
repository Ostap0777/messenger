import React from 'react';
import styles from './chatId.module.scss';
import InputSent from '../../UI/InputSent/InputSent';

interface ChatIdProps {
  className?: string;
  chatId: string | null;
  chat?: ChatId[] | null;
}

interface Message {
  sender: string;
  receiver: string;
  message: string;
  timestamp: string;
}

interface ChatId {
  chat:object ;
  participants: string[];
  messages: Message[];
}

const ChatId: React.FC<ChatIdProps> = ({ className, chatId, chat }) => {
  const currentUser = 'user1';








  return (
    <section className={`${styles.chat__section} ${className}`}>
      <div className={styles.contact__information}>
        <img className={styles.contact__foto} src="/ficon-messenger.png" alt="Контакт" />
    
      </div>
      <InputSent />
    </section>
  );
};

export default ChatId;
