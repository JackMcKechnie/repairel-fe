import PropTypes from 'prop-types';
import React from 'react';

import {
  FilterDiv,
  FilterWrapper,
  FilterHeadings,
  FilterInput,
  FilterLabel,
  ClearAll,
} from './Filter.style';

const Filter = ({ list }) => {
  const [filteredList, setFilteredList] = React.useState([]);

  const [filters, setFilters] = React.useState({
    price: '',
    condition: '',
    size: [],
  });

  const sizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const condition = ['New', 'Refurbished'];
  const price = ['High to Low', 'Low to High'];

  React.useEffect(() => {
    // if (filteredList.length === 0) {
    setFilteredList(list);
    // }
  }, [filters]);

  const handleChange = (event) => {
    let item = event.target.id.toLowerCase().split(' ').join('');
    if (item.includes('high')) {
      setFilters({ ...filters, price: item });
    } else if (item.includes('new') || item.includes('refurbished')) {
      setFilters({ ...filters, condition: item });
    } else {
      if (!filters.size.includes(item)) {
        setFilters({ ...filters, size: filters.size.concat(item) });
      } else {
        const index = filters.size.indexOf(item);
        if (index > -1) {
          filters.size.splice(index, 1);
        }
      }
    }
  };

  React.useEffect(() => {
    if (filteredList.length === list.length) filterFunction();
  }, [filters, filteredList]);

  const filterFunction = () => {
    const array = Object.keys(filters);
    array.forEach((filter) => {
      if (filter === 'price' && filters[filter] !== '') {
        filters[filter] === 'lowtohigh'
          ? setFilteredList(
              filteredList.sort((a, b) => (a.price > b.price ? 1 : -1))
            )
          : setFilteredList(
              filteredList.sort((a, b) => (a.price > b.price ? -1 : 1))
            );
      } else if (filter === 'condition' && filters[filter] !== '') {
        const newList = [];
        const refurbishedList = [];
        filteredList.map((product) => {
          product.new ? newList.push(product) : refurbishedList.push(product);
        });
        filters[filter] === 'new'
          ? setFilteredList(newList)
          : setFilteredList(refurbishedList);
      } else if (filter === 'size' && filters[filter].length !== 0) {
        let sizeList = [];
        filteredList.map((product) => {
          if (filters[filter].includes(product.Size.toString()))
            sizeList.push(product);
        });
        setFilteredList(sizeList);
      }
    });
  };

  const clearAll = () => {
    setFilters({ price: '', condition: '', size: [] });
    setFilteredList([]);
  };

  React.useEffect(() => {
    console.log(filteredList);
    console.log(filters);
  }, [filteredList, filters]);

  const renderParams = (arr) => {
    return arr.map((item, index) => {
      return (
        <React.Fragment key={(item, index)}>
          <FilterInput
            type={typeof item === 'number' ? 'checkbox' : 'radio'}
            name={
              typeof item === 'number'
                ? item
                : item.includes('to')
                ? 'price'
                : 'condition'
            }
            id={item}
            onChange={(event) => handleChange(event)}
          ></FilterInput>
          <FilterLabel htmlFor={item}>{item}</FilterLabel>
        </React.Fragment>
      );
    });
  };
  return (
    <FilterWrapper>
      <>
        <FilterHeadings>Price</FilterHeadings>
        <FilterDiv>{renderParams(price)}</FilterDiv>
      </>
      <div>
        <FilterHeadings>Condition</FilterHeadings>
        <FilterDiv>{renderParams(condition)}</FilterDiv>
      </div>
      <FilterHeadings>Size</FilterHeadings>
      <FilterDiv>{renderParams(sizes)}</FilterDiv>
      <ClearAll onClick={() => clearAll()}>Clear all</ClearAll>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
};

export default Filter;
