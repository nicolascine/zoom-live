import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => {
  return (
    <section>
      <Link to="/">Home</Link>
      <br />
      <Link to="/session/1">Session test</Link>
    </section>
  );
};
