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

const Filter = ({ list, setFilteredList }) => {
  const [filters, setFilters] = React.useState({
    price: "",
    condition: "",
    size: [],
  });

  const sizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const condition = ["New", "Refurbished"];
  const price = ["High to Low", "Low to High"];

  const handleChange = (event) => {
    event.target.checked ? handleCheck(event) : handleUncheck(event);
  };

  const handleCheck = (event) => {
    let item = event.target.id.toLowerCase().split(" ").join("");
    if (item.includes("high")) {
      setFilters({ ...filters, price: item });
    } else if (item.includes("new") || item.includes("refurbished")) {
      setFilters({ ...filters, condition: item });
    } else {
        setFilters({ ...filters, size: filters.size.concat(item) });
    }
  };

  const handleUncheck = (event) => {
    let id = event.target.id;
    const sizes = [...filters.size]
    const index = sizes.indexOf(id);
    if (index > -1) {
      sizes.splice(index, 1);
    }
    setFilters({ ...filters, size: sizes })
  };

  React.useEffect(() => {
    console.log(filters);
    filterFunction();
  }, [filters]);

  const filterFunction = () => {
    let listCopy = [...list];
    let array = Object.keys(filters);
    array.forEach((filter) => {
      if (filter === "price" && filters[filter] !== "") {
        filters[filter] === "lowtohigh"
          ? (listCopy = [...list].sort((a, b) => (a.price > b.price ? 1 : -1)))
          : (listCopy = [...list].sort((a, b) => (a.price > b.price ? -1 : 1)));
      } else if (filter === "condition" && filters[filter] !== "") {
        const newList = [];
        const refurbishedList = [];
        listCopy.map((product) => {
          product.new ? newList.push(product) : refurbishedList.push(product);
        });
        filters[filter] === "new"
          ? (listCopy = newList)
          : (listCopy = refurbishedList);
      } else if (filter === "size" && filters[filter].length !== 0) {
        let sizeArray = [];
        listCopy.map((product) => {
          if (filters[filter].includes(product.Size.toString()))
            sizeArray.push(product);
        });
        listCopy = sizeArray;
      }
      setFilteredList(listCopy);
    });
  };

  const clearAll = () => {
    setFilters({ price: "", condition: "", size: [] });
    setFilteredList([]);
    let checkboxes = document.querySelectorAll("input");
    Array.from(checkboxes, (checkbox) => {
      checkbox.checked = false;
    });
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
