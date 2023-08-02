import React, { useState } from 'react';

//Style
import styles from './ListStyle.module.css';

import mockedList from '../../mockedData/mockedListData.json';

//Components
import ListItem from './ListItem';
import AddButton from '../Buttons/AddButton';
import DialogForm from '../DialogForm/DialogForm';
import Pagination from '../Pagination/Pagination';

//Utils
import { editObjectById } from '../../utils/dataUtils';

const List = () => {
  const [list, setList] = useState(mockedList);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Calculate the current items to display based on the current page number and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpen = () => {
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

  const handleEdit = (newItem) => {
    setList((prevItems) => editObjectById(prevItems, newItem));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headers}>
        <div className={styles.itemTypeHeader}>Category</div>
        <div className={styles.itemTypeHeader}>Name</div>
        <div className={styles.itemDescHeader}>Text</div>
      </div>
      {currentItems.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <AddButton handleOpen={handleOpen} />
      <DialogForm
        open={open}
        handleClose={handleClose}
        handleAddItem={handleAddItem}
      />
    </div>
  );
};

export default List;
