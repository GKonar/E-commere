import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const hint = `
Pssst... here are some codes which You can use to test discount funcionality : relax, yougotthis, miakalifa, brunoise :)
`;

export default function VariableWidth({ children }) {
  return (
    <div>
      <Tooltip title={hint} placement="top-start">
        {children}
      </Tooltip>
    </div>
  );
}