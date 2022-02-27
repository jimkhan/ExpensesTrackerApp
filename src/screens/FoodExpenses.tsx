import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store';
import {CommonList, DateFilter} from '@components';

const FoodExpenses = () => {
  const {allExpenses} = useSelector((state: RootState) => state.Expense);
  const foodData = allExpenses.filter(item => item.type === 'food');

  const [data, setData] = useState(foodData);
  const filterhandler = (val: string) => {
    if (val === 'all') {
      setData(foodData);
    }
    if (val === 'week') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 7,
      );
      const week = foodData.filter(item => item.createAt > previousSeven);
      setData(week);
    }
    if (val === 'month') {
      var previousSeven = new Date(
        new Date().valueOf() - 1000 * 60 * 60 * 24 * 30,
      );
      const week = foodData.filter(item => item.createAt > previousSeven);
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

export default FoodExpenses;
