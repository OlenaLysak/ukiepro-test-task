import React, { useState } from 'react';

//Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

//Utils
import { generateUniqueId } from '../../utils/dataUtils';

const DialogForm = ({ open, handleClose, handleAddItem }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim()) {
      // Perform your desired action with the valid input
      setError(false);

      const newItem = {
        id: generateUniqueId(),
        name,
        category,
        text,
      };
      handleAddItem(newItem);

      //Reset form
      setCategory('');
      setName('');
      setText('');
      handleClose();
    } else {
      setError(true);
    }
  };

  const handleCancel = () => {
    setError(false);
    setCategory('');
    setName('');
    setText('');
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Requisition</DialogTitle>
        <DialogContent>
          <TextField
            id="category"
            label="Category"
            fullWidth
            margin="dense"
            value={category}
            onChange={handleCategoryChange}
          />
          <TextField
            id="name"
            label="Name"
            fullWidth
            margin="dense"
            value={name}
            onChange={handleNameChange}
            error={error}
            required // Set the field as required
            helperText={error ? 'Field cannot be empty' : ''}
          />
          <TextField
            id="text"
            label="Text"
            fullWidth
            margin="dense"
            multiline
            rows={2}
            value={text}
            onChange={handleTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogForm;
