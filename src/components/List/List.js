import React, { useState } from 'react';

//Style
import styles from './ListStyle.module.css';

import mockedList from '../../mockedData/mockedListData.json';

//Components
import ListItem from './ListItem';
import AddButton from '../Buttons/AddButton';
import DialogForm from '../DialogForm/DialogForm';

const List = () => {
  const [list, setList] = useState(mockedList);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    setList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddItem = (newItem) => {
    setList((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headers}>
        <div className={styles.itemTypeHeader}>Category</div>
        <div className={styles.itemTypeHeader}>Name</div>
        <div className={styles.itemDescHeader}>Text</div>
      </div>
      {list.map((item) => {
        return (
          <ListItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
      <AddButton handleClick={handleClick} />
      <DialogForm
        open={open}
        handleClose={handleClose}
        handleAddItem={handleAddItem}
      />
    </div>
  );
};

export default List;
