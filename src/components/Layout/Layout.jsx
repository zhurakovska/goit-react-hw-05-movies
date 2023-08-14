import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
