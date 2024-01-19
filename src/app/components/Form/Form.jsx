'use client';
import React from 'react';
import Button from '../Button/Button.jsx';
import styles from './form.module.css';

export default function Form() {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={styles.form}>
      <input type="text" name="name" placeholder="Nombre" onChange={onChangeHandler} value={inputValue} />
      <Button isPrimary text={'Ir a la tirada'} type="submit" />
    </form>
  );
}
