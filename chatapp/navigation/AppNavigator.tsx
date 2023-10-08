import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import GroupChatList from '../screens/GroupChatList';
import GroupChat from '../screens/GroupChat';
import UserProfile from '../screens/UserProfile';

const {Navigator, Screen} = createStackNavigator();

const AppNavigator: React.FC = () => {
  const config = {
    options: {
      headerShown: true,
    },
  };

  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={LoginScreen} options={config.options} />
      <Screen
        name="Register"
        component={RegisterScreen}
        options={config.options}
      />
      <Screen
        name="GroupChatList"
        component={GroupChatList}
        options={config.options}
      />
      <Screen name="GroupChat" component={GroupChat} options={config.options} />
      <Screen
        name="UserProfile"
        component={UserProfile}
        options={config.options}
      />
    </Navigator>
  );
};

export default AppNavigator;
