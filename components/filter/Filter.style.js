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

const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 0 0;
`;

const FilterLabel = styled.label`
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

const FilterInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: pointer;
  &:checked + ${FilterLabel} {
    text-decoration: underline;
  }
`;

const FilterHeadings = styled.h5`
  margin: 0;
`;

export { FilterWrapper, FilterDiv, FilterHeadings, FilterInput, FilterLabel };
