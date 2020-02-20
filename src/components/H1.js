import styled from 'styled-components';

export default styled.h1`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.between};
  color: ${({ theme }) => theme.color.main};
  font-size: 34px;
`;
