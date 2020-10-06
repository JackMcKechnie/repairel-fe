// import PropTypes from 'prop-types';

import {
  FilterList,
  FilterWrapper,
  FilterHeadings,
  FilterListItem,
} from './Filter.style';

const Filter = () => {
  const sizes = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const condition = ['New', 'Refurbished'];
  const price = ['High to Low', 'Low to High'];

  const renderParams = (arr) => {
    return arr.map((item, index) => {
      return <FilterListItem key={(item, index)}>{item}</FilterListItem>;
    });
  };
  return (
    <FilterWrapper>
      <div>
        <FilterHeadings>Price</FilterHeadings>
        <FilterList>{renderParams(price)}</FilterList>
      </div>
      <div>
        <FilterHeadings>Condition</FilterHeadings>
        <FilterList>{renderParams(condition)}</FilterList>
      </div>
      <FilterHeadings>Size</FilterHeadings>
      <FilterList>{renderParams(sizes)}</FilterList>
    </FilterWrapper>
  );
};

// Filter.propTypes = {
//   variants: PropTypes.array,
//   setSize: PropTypes.func,
// };

export default Filter;
