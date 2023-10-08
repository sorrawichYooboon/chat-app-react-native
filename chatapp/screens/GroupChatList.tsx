import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

interface GroupChatList {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const GroupChatList: React.FC<GroupChatList> = ({navigation}) => {
  return (
    <View>
      <Text>Group Chat List</Text>
      <Button
        title="Group chat"
        onPress={() => navigation.navigate('GroupChat')}
      />
      <Button
        title="User Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default GroupChatList;
