import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import Header from '../../components/Header/Header';
import ProductDetails from '../../components/ProductDetails';
import { IArticle } from '../../store/type';
import { wrapper } from '../../store';
import * as actionTypes from '../../store/actions';
import FilterContainer from '../../components/FilterContainer';
import Head from 'next/head';

interface ComponentProps {
  products: IArticle[];
}

const Homepage: FunctionComponent<ComponentProps> = ({ products }) => {
  const state = useSelector((state) => state);

  return (
    <Box
      sx={{
        padding: '0px calc((100vw - 1150px) / 2)',
        marginBottom: '200px',
        '@media (max-width: 1150px)': {
          padding: '0px 15px',
        },
      }}
    >
      <Head>
        <title>Bejamas Recuitement task</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta name='keywords' content='next js bejamas, adeyemi kolade' />
        <meta property='og:title' content='The Rock' />
        <meta property='og:type' content='video.movie' />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500&family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <ProductDetails />
      <FilterContainer />
    </Box>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    //usually this endpoint will be in an env file, I only left it here since its not going public
    const res = await fetch(
      `https://bejamasproducts.herokuapp.com/fetch_products`
    );
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    await store.dispatch({
      type: actionTypes.ON_FETCH_SUCCESS,
      payload: {
        products: data,
      },
    });

    return {
      props: { products: data },
    };
  }
);

export default Homepage;
