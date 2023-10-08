import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

interface RegisterScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Register" />
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default RegisterScreen;
