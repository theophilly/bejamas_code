import React, { FunctionComponent, ChangeEvent } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  useTheme,
} from '@mui/material';

import {
  IINITIAL_CATEGORIES,
  IINITIAL_PRICES,
} from '../FilterContainer/constants';

export interface FilterProps {
  categories: { [Key in keyof IINITIAL_CATEGORIES]: boolean };
  price_range: { [Key in keyof IINITIAL_PRICES]: boolean };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: FunctionComponent<FilterProps> = ({
  categories,
  price_range,
  handleChange,
  handlePriceChange,
}) => {
  const theme = useTheme();

  const { people, premium, pets, food, landmarks, cities, nature } = categories;
  const {
    zero_to_twenty,
    twenty_to_hun,
    hun_to_twoHun,
    twoHun_to_thou,
  } = price_range;

  return (
    <Box
      sx={{
        width: 'max-content',
      }}
    >
      <Box
        sx={{
          borderBottom: `2px solid ${theme.palette.fontLight}`,
          width: 'max-content',
        }}
      >
        <Typography sx={{ ...theme.typography.heading }}>Category</Typography>
        <FormControl
          sx={{ mt: 2, pb: 2 }}
          component='fieldset'
          variant='standard'
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={people}
                  onChange={handleChange}
                  name='people'
                />
              }
              label='People'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={premium}
                  onChange={handleChange}
                  name='premium'
                />
              }
              label='Premium'
            />
            <FormControlLabel
              control={
                <Checkbox checked={pets} onChange={handleChange} name='pets' />
              }
              label='Pets'
            />
            <FormControlLabel
              control={
                <Checkbox checked={food} onChange={handleChange} name='food' />
              }
              label='Food'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name='landmarks'
                />
              }
              label='Landmarks'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={cities}
                  onChange={handleChange}
                  name='cities'
                />
              }
              label='Cities'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={nature}
                  onChange={handleChange}
                  name='nature'
                />
              }
              label='Nature'
            />
          </FormGroup>
        </FormControl>
      </Box>
      {/* second */}
      <Box sx={{ width: 'max-content', mt: 2 }}>
        <Typography sx={{ ...theme.typography.heading }}>
          Price range
        </Typography>
        <FormControl sx={{ mt: 2 }} component='fieldset' variant='standard'>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={zero_to_twenty}
                  onChange={handlePriceChange}
                  name='zero_to_twenty'
                />
              }
              label='Lower than $20'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={twenty_to_hun}
                  onChange={handlePriceChange}
                  name='twenty_to_hun'
                />
              }
              label='$20 - $100'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hun_to_twoHun}
                  onChange={handlePriceChange}
                  name='hun_to_twoHun'
                />
              }
              label='$100 - $200'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={twoHun_to_thou}
                  onChange={handlePriceChange}
                  name='twoHun_to_thou'
                />
              }
              label='More than $200'
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filter;
