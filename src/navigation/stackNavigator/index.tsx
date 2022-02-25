import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from 'types';
import {HomeExpenses, CreateExpnesesScreen} from '@screens';
import {Colors} from '@config';

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeExpenses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddExpenses"
        component={CreateExpnesesScreen}
        options={{
          title: 'Add Expenses',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
