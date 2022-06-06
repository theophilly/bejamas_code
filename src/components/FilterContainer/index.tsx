import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  useTheme,
  Typography,
  Pagination,
  useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';

import Filter from '../Filter';
import ProductItem from '../ProductItem';
import AppState, { IArticle } from '../../store/type';
import SortBy from '../SortBy';
import { paginate } from '../Pagination/util';
import { getPaginationCount, generateActiveKeys } from './utils';
import MobileFilter from '../MobileFilter';
import {
  INITIAL_PRICES,
  ACTION_GENERATOR,
  INITIAL_CATEGORIES,
} from './constants';

interface ActivePriceRangeType {
  min: number;
  max: number;
}

const FilterContainer = () => {
  const theme = useTheme();
  const categoriesRef = React.useRef(INITIAL_CATEGORIES);
  const [categories, setCategories] = React.useState(INITIAL_CATEGORIES);
  const [current_page, setCurrentPage] = useState(1);
  const [price_range, setPrice_range] = React.useState(INITIAL_PRICES);
  const [sort_by, setSort_By] = useState<'price' | 'name'>();
  const state = useSelector((state: AppState): AppState => state);
  const firstUpdate = useRef(true);
  const [products, setProduct] = useState<IArticle[]>(
    state.productReducer.products
  );

  const lowerScreen = useMediaQuery('(max-width:500px)');

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    applyFilters();
  }, [price_range, categories, sort_by]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    categoriesRef.current = {
      ...categoriesRef.current,
      [event.target.name]: event.target.checked,
    };
    setCategories({ ...categoriesRef.current });
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice_range({
      ...INITIAL_PRICES,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value as 'price' | 'name';
    setSort_By(val);
  };

  const applyFilters = () => {
    let updatedList: IArticle[] = [...state.productReducer.products];
    const activeCategories: string[] = generateActiveKeys(categories);

    const activePriceRange = ACTION_GENERATOR[
      generateActiveKeys(price_range)[0]
    ] as ActivePriceRangeType;

    //  Price Filter
    if (activePriceRange) {
      updatedList = updatedList.filter(
        (item) =>
          item.price > activePriceRange.min && item.price < activePriceRange.max
      );
    }

    //  Category Filter
    if (activeCategories.length > 0) {
      updatedList = updatedList.filter((item) =>
        activeCategories.includes(item.category)
      );
    }
    //  Sort Filter
    if (sort_by) {
      if (sort_by === 'price') {
        updatedList = updatedList.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      if (sort_by === 'name') {
        updatedList = updatedList.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    }

    setProduct(updatedList);
  };

  return (
    <Box>
      <Box sx={{ ...theme.typography.flex2 }}>
        <Box sx={{ display: 'flex', my: 3 }}>
          <Typography sx={{ fontWeight: '700', fontSize: '1.2rem' }}>
            Photography&ensp;/&ensp;
          </Typography>
          <Typography
            sx={{
              color: theme.palette.fontLightSecondary,
              fontSize: '1.1rem',
            }}
          >
            Premium Photos
          </Typography>
        </Box>
        {/* show mobile filter  */}
        {lowerScreen ? (
          <MobileFilter
            categories={categories}
            price_range={price_range}
            handleChange={handleChange}
            handlePriceChange={handlePriceChange}
          />
        ) : (
          <SortBy sort_by={sort_by} handleSortChange={handleSortChange} />
        )}

        {/* */}
      </Box>
      {/* lower */}
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            '@media (max-width: 500px)': {
              display: 'none',
            },
          }}
        >
          <Filter
            categories={categories}
            price_range={price_range}
            handleChange={handleChange}
            handlePriceChange={handlePriceChange}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'center',
            }}
          >
            {paginate(products, current_page, 8).map(
              (product: IArticle, index: number) => (
                <ProductItem key={index} product={product} />
              )
            )}
          </Box>
          <Pagination
            sx={{
              marginTop: 4,
            }}
            shape='rounded'
            count={getPaginationCount<IArticle>(products, 8)}
            page={current_page}
            onChange={handlePaginationChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterContainer;
