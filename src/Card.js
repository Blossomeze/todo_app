import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Card(props) {
  return (
    <div>
      <List>
        <ListItem>
            <ListItemText primary={props.text} secondary='Deadline⏰'></ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default Card
