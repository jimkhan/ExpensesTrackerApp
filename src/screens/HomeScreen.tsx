import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';

import {CommonList, DateFilter} from '@components';

const HomeScreen = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);

  const [data, setData] = useState(allExpenses);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      setData(allExpenses);
    }
    if (val === 'week') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 7,
      );
      const week = allExpenses.filter(item => item.createAt > previousSeven);
      setData(week);
    }
    if (val === 'month') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 30,
      );
      const week = allExpenses.filter(item => item.createAt > previousSeven);
      setData(week);
    }
  };

  console.log(allExpenses);

  return (
    <>
      <DateFilter
        onPressAll={() => filterhandler('all')}
        onPressWeek={() => filterhandler('week')}
        onPressMonth={() => filterhandler('month')}
      />
      <CommonList data={data} />
    </>
  );
};

export default HomeScreen;
