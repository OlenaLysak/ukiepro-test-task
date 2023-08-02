import React, { useState } from 'react';

//Styling
import styles from './ListItemStyle.module.css';

//Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

//Components
import EditForm from '../DialogForm/EditForm';

const ListItem = ({ item, handleDelete, handleEdit }) => {
  const { category, name, text, id } = item;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.type}>{category}</div>
        <div className={styles.type}>{name}</div>
        <div>{text}</div>
        <div className={styles.buttons}>
          <div className={styles.btn} onClick={handleOpen}>
            <EditIcon className={styles.icon} />
          </div>
          <div className={styles.btn} onClick={() => handleDelete(id)}>
            <DeleteIcon className={styles.icon} />
          </div>
        </div>
      </div>
      <EditForm
        open={open}
        handleClose={handleClose}
        defaultValues={item}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default ListItem;
