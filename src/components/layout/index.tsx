import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC<any> = (props) => {
  return (
    <>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
};
