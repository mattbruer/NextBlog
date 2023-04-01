import React from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
