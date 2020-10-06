import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: darkgray;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;

const FilterListItem = styled.li`
  padding-right: 1rem;
`;

const FilterHeadings = styled.h4`
  margin: 0.5rem 0;
`;

export { FilterWrapper, FilterList, FilterHeadings, FilterListItem };
