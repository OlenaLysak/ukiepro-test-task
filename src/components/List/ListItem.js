import React from 'react';

//Styling
import styles from './ListItemStyle.module.css';

//Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItem = ({ item, handleDelete }) => {
  const { category, name, text, id } = item;

  return (
    <div className={styles.wrapper}>
      <div className={styles.type}>{category}</div>
      <div className={styles.type}>{name}</div>
      <div>{text}</div>
      <div className={styles.buttons}>
        <div className={styles.btn}>
          <EditIcon className={styles.icon} />
        </div>
        <div className={styles.btn} onClick={() => handleDelete(id)}>
          <DeleteIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
