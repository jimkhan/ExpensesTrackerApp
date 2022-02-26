import {View} from 'react-native';
import React from 'react';
import {ExpensesCard} from '@components';
import {AppText, AppTextInput} from '@common';

const HomeExpenses = () => {
  return (
    <>
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
    </>
  );
};

export default HomeExpenses;
