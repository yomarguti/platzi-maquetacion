import React, { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
