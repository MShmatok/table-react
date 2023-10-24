import { Box } from '@mui/material';
import LinearIndeterminate from 'pages/componentsOfPages/loaderMui/LoaderMui';
import Header from 'pages/componentsOfPages/header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorIsLoading } from 'redux/root/selectors';

const Layout = () => {
  const isLoading = useSelector(selectorIsLoading);
  return (
    <>
      <Header />
      <Box sx={{ height: '5px' }}>{isLoading && <LinearIndeterminate />}</Box>
      <Outlet />
    </>
  );
};

export default Layout;
