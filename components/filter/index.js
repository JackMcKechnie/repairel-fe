import PropTypes from "prop-types";
import React from "react";

import {
  FilterDiv,
  FilterWrapper,
  FilterHeadings,
  FilterInput,
  FilterLabel,
  ClearAll,
} from "./Filter.style";

const Filter = ({ list, setFilteredList, filteredList }) => {
  const [filters, setFilters] = React.useState({
    price: "",
    condition: "",
    size: [],
  });
  const [clear, setClear] = React.useState(false)
  

  const sizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const condition = ["New", "Refurbished"];
  const price = ["High to Low", "Low to High"];

  React.useEffect(() => {
    setFilteredList(list)
  }, [clear]);

  const handleChange = (event) => {
    let item = event.target.id.toLowerCase().split(" ").join("");
    if (item.includes("high")) {
      setFilters({ ...filters, price: item });
    } else if (item.includes("new") || item.includes("refurbished")) {
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
    filterFunction();
  }, [filters]);

  const filterFunction = () => {
    let priceArray = [];
    let conditionArray = [];
    let sizeArray = [];
    let array = Object.keys(filters);
    array.forEach((filter) => {
      if (filter === "price" && filters[filter] !== "") {
        filters[filter] === "lowtohigh"
          ? priceArray = priceArray.concat([...list].sort((a, b) =>
              a.price > b.price ? 1 : -1))
          : priceArray = priceArray.concat([...list].sort((a, b) =>
              a.price > b.price ? -1 : 1))
      } else if (filter === "condition" && filters[filter] !== "") {
        const newList = [];
        const refurbishedList = [];
        [...list].map((product) => {
          product.new ? newList.push(product) : refurbishedList.push(product);
        });
        filters[filter] === "new"
          ? conditionArray = conditionArray.concat(newList)
          : conditionArray = conditionArray.concat(refurbishedList);
      } else if (filter === "size" && filters[filter].length !== 0) {
        [...list].map((product) => {
          if (filters[filter].includes(product.Size.toString()))
            sizeArray.push(product);
        });
      }
      let mergeArray1 = priceArray.concat(conditionArray)
      mergeArray1 = [...new Set([...priceArray, ...conditionArray])]
      let mergeArray2 = mergeArray1.concat(sizeArray)
      mergeArray2 = [...new Set([...mergeArray1, ...sizeArray])]
      console.log(mergeArray2)
    });
  };

  const clearAll = () => {
    setFilters({ price: "", condition: "", size: [] });
    setFilteredList([]);
    setClear(!clear)
  };

  const renderParams = (arr) => {
    return arr.map((item, index) => {
      return (
        <React.Fragment key={(item, index)}>
          <FilterInput
            type={typeof item === "number" ? "checkbox" : "radio"}
            name={
              typeof item === "number"
                ? item
                : item.includes("to")
                ? "price"
                : "condition"
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
  filteredList: PropTypes.array,
  setFilteredList: PropTypes.func,
};

export default Filter;
