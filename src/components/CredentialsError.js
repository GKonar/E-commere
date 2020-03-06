import styled from 'styled-components';

export default styled.span`  
height: 20px;
color: ${({ theme }) => theme.color.error};
font-size: ${({ theme }) => theme.textSize.secondary};
position: absolute;
bottom: -40%;
font-weight:600;
`

