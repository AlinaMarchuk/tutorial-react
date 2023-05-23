import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [dense, setDense] = React.useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        height: 200,
        '& > div': {
          overflow: 'auto auto',
          '&::-webkit-scrollbar': {
            height: 10,
            width: 10,
            WebkitAppearance: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '2px solid',
            backgroundColor: 'green',
          },
        },
      }}
    >
      <List
        component="nav"
        aria-label="secondary mailbox folder"
        sx={{ height: 200 }}
      >
        <ListSubheader>SUMMARY</ListSubheader>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Tras" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={event => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={event => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={event => handleListItemClick(event, 6)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 7}
          onClick={event => handleListItemClick(event, 7)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
  );
}
