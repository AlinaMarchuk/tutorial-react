import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function SelectLabels() {
  const [age, setAge] = React.useState('');
  //const [value, setValue] = React.useState('default');

  const handleChange = event => {
    setAge(event.target.value);
    //setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          //label="Select"
          defaultValue="EUR"
          placeholder="category"
          //helperText="Please select your currency"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    // <div>
    //   <FormControl sx={{ m: 1, minWidth: 120 }}>
    //     <Select
    //       value={age}
    //       onChange={handleChange}
    //       displayEmpty
    //       inputProps={{ placeholder: 'Category' }}
    //       defaultValue="default"
    //     >
    //       <MenuItem value="">
    //         <em>None</em>
    //       </MenuItem>
    //       <MenuItem defaultValue="default" disabled hidden>
    //         None
    //       </MenuItem>
    //       <MenuItem value={10}>Ten</MenuItem>
    //       <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem>
    //     </Select>
    //   </FormControl>
    // </div>
  );
}
