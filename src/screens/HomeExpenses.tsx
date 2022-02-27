import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';
import {CommonList, DateFilter} from '@components';

const HomeExpenses = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  const homeData = allExpenses.filter(item => item.type === 'home');

  const [data, setData] = useState(homeData);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      setData(homeData);
    }
    if (val === 'week') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 7,
      );
      const week = homeData.filter(item => item.createAt > previousSeven);
      setData(week);
    }
    if (val === 'month') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 30,
      );
      const week = homeData.filter(item => item.createAt > previousSeven);
      setData(week);
    }
  };
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

export default HomeExpenses;
