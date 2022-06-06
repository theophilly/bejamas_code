import React, { useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import AppState, { IArticle } from '../../store/type';

const AddToCartButton = () => {
  const theme = useTheme();
  return (
    <Button disableElevation variant='contained'>
      Add to Cart
    </Button>
  );
};

export default function ProductDetails() {
  const theme = useTheme();
  const {
    productReducer: { products: AllProducts },
  } = useSelector((state: AppState): AppState => state);

  const [product] = useState<IArticle>(AllProducts[0]);

  return (
    <Box
      sx={{
        borderBottom: `2px solid ${theme.palette.fontLight}`,
        paddingBottom: '30px',
        marginTop: '10px',
      }}
    >
      <Box sx={{ ...theme.typography.flex2, height: '80px' }}>
        <Typography sx={{ ...theme.typography.title1 }}>
          {product.name}
        </Typography>
        <AddToCartButton />
      </Box>
      <Box
        sx={{
          position: 'relative',
          height: '350px',
          '::after': {
            ...theme.typography.flex,
            content: '"Photo of the day"',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200px',
            height: '35px',
            background: 'white',
            fontWeight: '700',
          },
        }}
      >
        <Image
          objectPosition='bottom'
          objectFit='cover'
          layout='fill'
          src={product.image.src}
        />
      </Box>
      {/* lower */}
      <Box
        sx={{
          ...theme.typography.flex2,
          alignItems: 'flex-start',
          marginTop: '10px',
          '@media (max-width: 700px)': {
            flexDirection: 'column',
          },
        }}
      >
        {/* right text */}
        <Box sx={{ flex: 6 }}>
          <Typography
            sx={{
              ...theme.typography.heading,
              display: 'flex',
              alignItems: 'center',
              height: '35px',
            }}
          >
            About the {product.name}
          </Typography>

          <Typography
            sx={{
              ...theme.typography.heading,
              color: theme.palette.fontLightSecondary,
              height: '30px',
            }}
          >
            Pets
          </Typography>
          <Typography>{product.details?.description}</Typography>
        </Box>
        {/* left */}
        <Box
          sx={{
            flex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            '@media (max-width: 700px)': {
              alignItems: 'flex-start',
            },
          }}
        >
          <Typography
            sx={{
              ...theme.typography.heading,
              display: 'flex',
              alignItems: 'center',
              height: '35px',
              width: 'max-content',
            }}
          >
            People also buy
          </Typography>
          <Box sx={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            {product.details?.recommendations.map((item, index) => (
              <Image height={160} width={120} key={index} src={item.src} />
            ))}
          </Box>

          <Typography sx={{ ...theme.typography.heading, marginTop: '15px' }}>
            Details
          </Typography>
          <Typography
            sx={{
              color: theme.palette.fontLightSecondary,
              fontSize: '.9rem',
              my: '3px',
            }}
          >
            Size: 1020 x 1020 pixel
          </Typography>
          <Typography
            sx={{ color: theme.palette.fontLightSecondary, fontSize: '.9rem' }}
          >
            Size: 15 mb
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
