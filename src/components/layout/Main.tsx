import React from 'react';

export const Main: React.FC<any> = (props) => {
  return <main role="main">{props.children}</main>;
};
