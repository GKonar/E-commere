import React from 'react';
import styled from 'styled-components';
import { ICONS } from '../assets/icons';

const Svg = styled.svg`
  display: 'inline-block';
  vertical-align: 'middle';
`;

const Path = styled.path`
  fill: ${({ color }) => color};
`;

export default ({
  size = 24,
  color = '#000000',
  icon,
  viewBox = '512',
}) => {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${viewBox} ${viewBox}`}>
      <Path color={color} d={ICONS[icon]}></Path>
    </Svg>
  );
};
