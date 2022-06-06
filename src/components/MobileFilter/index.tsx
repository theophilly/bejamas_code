import React, { useState, FunctionComponent } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  useTheme,
  Button,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Filter, { FilterProps } from '../Filter';
import { FilterIcon } from '../../assets/Icons';

const MobileFilter: FunctionComponent<FilterProps> = ({
  categories,
  price_range,
  handleChange,
  handlePriceChange,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box
        onClick={handleClick}
        sx={{ width: 'max-content', cursor: 'pointer' }}
      >
        <FilterIcon />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogContent>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}
          >
            <Typography
              sx={{
                ...theme.typography.title1,
                fontWeight: '600',
              }}
            >
              Filter
            </Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
          </Box>
          <Filter
            categories={categories}
            price_range={price_range}
            handleChange={handleChange}
            handlePriceChange={handlePriceChange}
          />
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              height: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <Button
                sx={{ height: '35px', width: '130px' }}
                variant='outlined'
              >
                CLEAR
              </Button>
              <Button
                sx={{ height: '35px', width: '130px' }}
                variant='contained'
              >
                SAVE
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MobileFilter;
