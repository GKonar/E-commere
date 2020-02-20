import styled from 'styled-components';

export default styled.h3`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.between};
  color: ${({ theme }) => theme.color.primary};
  font-size: 24px;
`;
