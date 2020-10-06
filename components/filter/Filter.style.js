import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem 0;
  background-color: white;
  border: 2px solid black;
  @media (min-width: 750px) {
    width: 45%;
    margin-left: 1rem;
  }
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 0 0;
`;

const FilterListItem = styled.li`
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FilterHeadings = styled.h5`
  margin: 0;
`;

export { FilterWrapper, FilterList, FilterHeadings, FilterListItem };
