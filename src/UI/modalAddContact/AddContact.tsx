import React, { useState } from 'react';
import styles from '../modalAddContact/addContact.module.scss'
import { addContactProps } from '../../models/modal';
import { Plus } from 'lucide-react';

export default function AddContact({ active, setActive }: addContactProps) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [formInvalid, setFormValidator] = useState<boolean>(false)

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name) newErrors.name = 'Ім\'я є обов\'язковим.';
    if (!email) {
      newErrors.email = 'Email є обов\'язковим.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Невірний формат email.';
    }
    
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
	 setFormValidator(!isValid)
	 return isValid
  };

  const handleAddContact = async () => {
    if (validateForm()) {

      setName('');
      setEmail('');
      setActive(false);
    }
  };

  return (
    <div className={active ? `${styles.modal__contact} ${styles.active}` : styles.modal__contact} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <p className={styles.modal__title}>Добавте контакт</p>
        <form className={styles.modal__form} action="">
          <label className={styles.form__label} htmlFor="name">Імя:</label>
          <input
            id="name"
            className={styles.form__input}
            type="text"
            placeholder='Імя'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
          
          <label className={styles.form__label} htmlFor="email">Email:</label>
          <input
            id="email"
            className={styles.form__input}
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </form>
        <button className={styles.modal__button} onClick={handleAddContact}>
          <Plus />
        </button>
      </div>
		{formInvalid && (
        <div className={styles.modal__form__error}>
          <div className={styles.modal__form__message}>
            Форми заповнені не вірно, <br /> будь ласка перевірте чи коректні дані!
          </div>
        </div>
      )}
    </div>
  );
}
