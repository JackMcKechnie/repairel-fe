import PropTypes from 'prop-types';

import {
  FilterDiv,
  FilterWrapper,
  FilterHeadings,
  FilterInput,
  FilterLabel,
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
    if (filteredList.length === 0) {
      setFilteredList(list);
    }
  }, []);

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
  // const filterPrice = (item) => {
  //   // const priceList = filteredList.length === 0 ? fullList : filteredList;
  //   item === 'lowtohigh'
  //     ? filteredList.sort((a, b) => (a.price > b.price ? 1 : -1))
  //     : filteredList.sort((a, b) => (a.price > b.price ? -1 : 1));
  // };

  // const filterCondition = (item) => {
  //   const newList = [];
  //   const refurbishedList = [];
  //   filteredList.map((product) => {
  //     product.new ? newList.push(product) : refurbishedList.push(product);
  //   });
  //   item === 'new'
  //     ? setFilteredList(newList)
  //     : setFilteredList(refurbishedList);
  // };
  // console.log(filteredList);

  // const filterSize = (item) => {
  //   const matchedSizes = [];
  //   list.map((product) => {
  //     if (product.Size === parseInt(item)) matchedSizes.push(product);
  //   });
  //   // console.log(matchedSizes);
  // };
  const renderParams = (arr) => {
    return arr.map((item, index) => {
      return (
        <>
          <FilterInput
            type={typeof item === 'number' ? 'checkbox' : 'radio'}
            name={
              typeof item === 'number'
                ? item
                : item.includes('to')
                ? 'price'
                : 'condition'
            }
            key={(item, index)}
            id={item}
            onChange={(event) => handleChange(event)}
          ></FilterInput>
          <FilterLabel key={item} htmlFor={item}>
            {item}
          </FilterLabel>
        </>
      );
    });
  };
  return (
    <FilterWrapper>
      <button>Clear all</button>
      <div>
        <FilterHeadings>Price</FilterHeadings>
        <FilterDiv>{renderParams(price)}</FilterDiv>
      </div>
      <div>
        <FilterHeadings>Condition</FilterHeadings>
        <FilterDiv>{renderParams(condition)}</FilterDiv>
      </div>
      <FilterHeadings>Size</FilterHeadings>
      <FilterDiv>{renderParams(sizes)}</FilterDiv>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
};

export default Filter;
