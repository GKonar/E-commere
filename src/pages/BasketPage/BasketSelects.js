import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function BasketSelects({ item }) {
  const [size, setSize] = React.useState('');
  const [color, setColor] = React.useState('');
  const handleChangeSize = event => {
    setSize(event.target.value);
  };
  const handleChangeColor = event => {
    setColor(event.target.value);
  }
  return (
    <>
      {
        item.size !== undefined ? (
          <FormControl variant="filled">
            <InputLabel>Size</InputLabel>
            <Select
              value={size}
              onChange={handleChangeSize}
              name="size"
            >
              <MenuItem value={'XS'}>XS</MenuItem>
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'M'}>M</MenuItem>
              <MenuItem value={'L'}>L</MenuItem>
              <MenuItem value={'XL'}>XL</MenuItem>
            </Select>
          </FormControl>
        ) : null
      }
      {
        item.color !== undefined ? (
          <FormControl variant="filled">
            <InputLabel>Color</InputLabel>
            <Select
              value={color}
              onChange={handleChangeColor}
              name="color"
            >
              <MenuItem value={'Blue'}>Blue</MenuItem>
              <MenuItem value={'Red'}>Red</MenuItem>
              <MenuItem value={'Pink'}>Pink</MenuItem>
              <MenuItem value={'Yellow'}>Yellow</MenuItem>
              <MenuItem value={'Salmon'}>Salmon</MenuItem>
            </Select>
          </FormControl>
        ) : null
      }
    </>
  )
}

export default BasketSelects
