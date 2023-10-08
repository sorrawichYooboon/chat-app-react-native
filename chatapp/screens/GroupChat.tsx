import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

interface GroupChat {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const GroupChat: React.FC<GroupChat> = ({navigation}) => {
  return (
    <View>
      <Text>Group Chat</Text>
    </View>
  );
};

export default GroupChat;
