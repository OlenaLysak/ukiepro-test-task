import React, { useState } from 'react';

//Style
import styles from './ListStyle.module.css';

import mockedList from '../../mockedData/mockedListData.json';

//Components
import ListItem from './ListItem';

const List = () => {
  const [list, setList] = useState(mockedList);

  const handleDelete = (id) => {
    setList((prevItems) => prevItems.filter((item) => item.id !== id));
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
    </div>
  );
};

export default List;
