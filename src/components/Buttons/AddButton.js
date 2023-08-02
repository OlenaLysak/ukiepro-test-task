import React from 'react';

//Icon
import AddIcon from '@mui/icons-material/Add';

//Style
import styles from './AddButtonStyle.module.css';

const AddButton = ({ handleClick }) => {
  return (
    <div className={styles.buttonContainer} onClick={handleClick}>
      <div>
        <AddIcon className={styles.icon} fontSize="small" />
      </div>
      <div className={styles.text}>REQUISITION</div>
    </div>
  );
};

export default AddButton;
