import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListScroll() {
  // const [selectedIndex, setSelectedIndex] = React.useState(1);
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  return (
    <>
      <ListSubheader
        sx={{
          backgroundColor: '#424242',
          borderBottom: '2px solid black',
          width: 213,
          mt: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        SUMMARY
      </ListSubheader>
      <Box
        sx={theme => ({
          backgroundColor: theme.palette.primary.dark,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: 213,
          height: 280,
          '& > div': {
            overflow: 'hidden auto',
            '&::-webkit-scrollbar': {
              height: 5,
              width: 6,
              WebkitAppearance: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              border: '2px solid',
              // borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
              borderColor: 'green',
              backgroundColor: 'green',
            },
          },
        })}
      >
        <div>
          <List
            component="nav"
            aria-label="secondary mailbox folder"
            sx={{ height: 280 }}
          >
            {/* <Grid xs={12}> */}
            <ListItem
              sx={{ borderBottom: '2px solid black' }}
              //onClick={event => handleListItemClick(event, 1)}
            >
              Scroll bar appears
            </ListItem>
            <ListItem
              sx={{ borderBottom: '2px solid black' }}
              //onClick={event => handleListItemClick(event, 2)}
            >
              Scroll bar appears
            </ListItem>
            <ListItem
              sx={{ borderBottom: '2px solid black' }}
              //onClick={event => handleListItemClick(event, 3)}
            >
              Scroll bar appears
            </ListItem>
            <ListItem
              sx={{ borderBottom: '2px solid black' }}
              //onClick={event => handleListItemClick(event, 4)}
            >
              Scroll bar appears
            </ListItem>
            <ListItem
              sx={{ borderBottom: '2px solid black' }}
              //onClick={event => handleListItemClick(event, 5)}
            >
              Scroll bar appears
            </ListItem>
            {/* <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item>
            <Item>Scroll bar appears</Item> */}
            {/* </Grid> */}
          </List>
        </div>
        {/* <div>
            <Grid container spacing={3} disableEqualOverflow>
              <Grid xs={12}>
                <Item>`disableEqualOverflow` prevents scrollbar</Item>
              </Grid>
            </Grid>
          </div> */}
      </Box>
    </>
  );
}
