import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  backgroun-color: pink;
`;

export default Wrapper;
