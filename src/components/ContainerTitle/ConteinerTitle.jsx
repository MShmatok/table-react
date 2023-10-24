import { Title } from 'components/App.styled';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from 'redux/table/selectors';
import { WraperTitle } from './ContainerTitle.styled';

const ContainerTitle = () => {
  const isLoading = useSelector(selectorIsLoading);
  return (
    <WraperTitle>
      <Title>Phonebook</Title>
      {isLoading && <Loader />}
    </WraperTitle>
  );
};

export default ContainerTitle;
