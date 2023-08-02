import React from 'react';

//Components
import TextField from '@mui/material/TextField';

const FilterPanel = ({ filterList }) => {
  return (
    <div>
      <TextField
        id="name"
        label="Name"
        fullWidth
        margin="dense"
        onChange={(e) => filterList(e.target.value)}
      />
    </div>
  );
};

export default FilterPanel;
