import React, { FunctionComponent } from 'react';
import { Box, useTheme, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { IArticle } from '../../store/type';
import { ADD_TO_CART } from '../../store/actions';

interface ComponentProps {
  product: IArticle;
}

const ProductItem: FunctionComponent<ComponentProps> = ({ product }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
      },
    });
  };

  const {
    image: { src },
    name,
    category,
    price,
    bestseller,
  } = product;

  return (
    <Box>
      <Box
        sx={{
          ...(bestseller && {
            '::after': {
              ...theme.typography.flex,
              fontSize: '.8rem',
              content: '"Best Seller"',
              position: 'absolute',
              color: 'black',
              top: 0,
              left: 0,
              width: '90px',
              height: '25px',
              background: 'white',
              fontWeight: '700',
            },
          }),
          position: 'relative',
          height: '250px',
          width: '200px',
          '@media (max-width: 500px)': {
            height: '300px',
            width: '290px',
          },
        }}
      >
        <Image
          alt={product.image.alt}
          width={300}
          height={100}
          objectPosition='bottom'
          objectFit='cover'
          layout='fill'
          src={src}
        />
      </Box>
      <Button
        onClick={handleDispatch}
        disableElevation
        sx={{
          width: '200px',
          '@media (max-width: 500px)': {
            width: '290px',
            height: '50px',
          },
        }}
        variant='contained'
      >
        ADD TO CART
      </Button>

      <Typography sx={{ color: theme.palette.fontLightSecondary }}>
        {category}
      </Typography>
      <Typography sx={{ ...theme.typography.heading, fontSize: '1.1rem' }}>
        {name}
      </Typography>
      <Typography sx={{ color: theme.palette.fontLightSecondary }}>
        ${price}
      </Typography>
    </Box>
  );
};

export default ProductItem;
