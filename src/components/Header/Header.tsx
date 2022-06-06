import React, { FunctionComponent, useEffect, useRef } from 'react';
import {
  Box,
  useTheme,
  Badge,
  ButtonBase,
  Popover,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import { CartIcon } from '../../assets/Icons';
import AppState, { IArticle } from '../../store/type';
import { CLEAR } from '../../store/actions';

const CartItem = ({ product }: { product: IArticle }) => {
  const theme = useTheme();
  return (
    <Box sx={{ ...theme.typography.flex2, p: 1 }}>
      <Box>
        <Typography sx={{ ...theme.typography.heading }}>
          {product.name}
        </Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <Box>
        <Image height={50} width={100} src={product.image.src} />
      </Box>
    </Box>
  );
};

const Header: FunctionComponent = () => {
  const dispatch = useDispatch();
  const firstUpdate = useRef(true);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const theme = useTheme();

  const {
    cartReducer: { products },
  } = useSelector((state: AppState): AppState => state);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (products.length < 1) {
      setAnchorEl(null);
    }
  }, [products.length]);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDispatch = () => {
    dispatch({
      type: CLEAR,
    });
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        ...theme.typography.flex2,
        height: '60px',
        marginTop: '10px',
        borderBottom: `2px solid ${theme.palette.fontLight}`,
      }}
    >
      <Box sx={{ display: 'inline-block' }}>
        <Image height={20} width={130} src='./Group.png' />
      </Box>

      <Box>
        <ButtonBase
          aria-describedby={id}
          onClick={products.length > 0 ? handleClick : () => {}}
        >
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={products.length}
            color='primary'
          >
            <CartIcon />
          </Badge>
        </ButtonBase>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.7 }}
          >
            <Typography
              sx={{
                ...theme.typography.title1,
                fontWeight: '600',
              }}
            ></Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
          </Box>
          <Box sx={{ width: '230px' }}>
            {products.map((product, index) => (
              <Box key={index} onClick={handleClose}>
                <CartItem product={product}></CartItem>
              </Box>
            ))}
          </Box>
          <Box sx={{ ...theme.typography.flex, mb: '10px' }}>
            <Button
              onClick={handleDispatch}
              sx={{ width: '90%' }}
              variant='outlined'
            >
              CLEAR
            </Button>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Header;
