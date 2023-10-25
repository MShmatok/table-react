import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Home from '../pages/home/Home';
import Table from '../pages/contact/Contact';
import Login from '../pages/login/Login';
import { GlobalStyle } from './GlobalStyled';
import ModalChangeContact from '../pages/modal/ModalChangeContact';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';

import { refreshUserThunk } from 'store/auth/thunk';
import { ToastContainer } from 'react-toastify';
import { selectorIsRefreshing } from 'store/auth/selectors';

import ModalAddContact from 'pages/modal/ModalAddContact';
import {
  selectorDataForModal,
  selectorDataForModalAdd,
} from 'store/table/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshin = useSelector(selectorIsRefreshing);
  const isShowModalChange = useSelector(selectorDataForModal);
  const isShowModalAdd = useSelector(selectorDataForModalAdd);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshin ? (
    <b>Refreshing user ...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/table"
            element={
              <PrivateRoute>
                <Table />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {isShowModalChange && <ModalChangeContact />}
      {isShowModalAdd && <ModalAddContact />}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export { App };
