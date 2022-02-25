import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './drawerNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
