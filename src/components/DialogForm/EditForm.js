import React, { useState } from 'react';

//Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const EditForm = ({ open, handleClose, defaultValues, handleEdit }) => {
  const {
    id,
    category: defaultCategory,
    name: defaultName,
    text: defaultText,
  } = defaultValues;
  const [category, setCategory] = useState(defaultCategory);
  const [name, setName] = useState(defaultName);
  const [text, setText] = useState(defaultText);
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
    //Validation
    if (name.trim()) {
      // Perform your desired action with the valid input
      setError(false);

      const newItem = {
        id,
        name,
        category,
        text,
      };
      handleEdit(newItem);

      //Reset form
      setCategory('');
      setName('');
      setText('');
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ width: '1000px' }}>
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
            required
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
          <Button color="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditForm;
