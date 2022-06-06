import React, { ChangeEvent, FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import { SortIcon } from '../../assets/Icons';

interface SortByProps {
  sort_by?: string;
  handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SortBy: FunctionComponent<SortByProps> = ({
  sort_by,
  handleSortChange,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <SortIcon />
        <Typography sx={{ fontSize: '.9rem' }}>Sort By</Typography>
      </Box>

      <select
        onChange={handleSortChange}
        value={sort_by}
        style={{ border: 'none', cursor: 'pointer' }}
        name='sort_by'
        id='sort_by'
      >
        <option value=''>none</option>
        <option value='price'>price</option>
        <option value='name'>name</option>
      </select>
    </Box>
  );
};

export default SortBy;
