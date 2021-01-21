import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../page/Dashboard';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Auth.Screen name="Dashboard" component={Dashboard} />
    </Auth.Navigator>
  );
};

export default AppRoutes;
