import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
};
