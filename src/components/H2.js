import styled from 'styled-components';

export default styled.h3`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.small};
  color: ${({ theme }) => theme.color.main};
  font-size: 28px;
`;
