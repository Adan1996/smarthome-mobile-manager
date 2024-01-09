import React from 'react';
import {View} from 'react-native';
import InputBox from './components/InputBox';
import ButtonComponent from './components/ButtonComponent';

const YourApp = () => {
  const [text, setText] = React.useState<string>('');

  const onChangeText = React.useCallback((text: string) => setText(text), []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <InputBox placeholder='Input your RFID in here!' value={text} onChangeText={onChangeText}/>
      <ButtonComponent />
    </View>
  );
};

export default YourApp;
