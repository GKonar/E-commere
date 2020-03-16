import styled from 'styled-components';

import { sizes } from '../helpers/sizes';

export default styled.h3`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.between};
  color: ${({ theme }) => theme.color.primary};
  font-size: 24px;

  ${sizes.mobileM} {
    font-size: 20px;
  }
`;
