import styled from 'styled-components';

export default styled.h4`
  display: flex;
  align-items: center;
  /* margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.default}; */
  margin: 0;
  color: ${({ theme }) => theme.color.main};
  font-size: 14px;
`;
