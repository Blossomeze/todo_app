import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Card = ({ text, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <ListItem>
      <Checkbox
        color="primary"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <ListItemText
        primary={text}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      />
      <IconButton color="secondary" onClick={onDelete}>
        <DeleteForeverIcon />
      </IconButton>
    </ListItem>
  );
};

export default Card;
