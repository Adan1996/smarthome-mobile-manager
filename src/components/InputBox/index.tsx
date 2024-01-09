import React from 'react';
import {TextInput} from 'react-native';

interface IInputBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputBox = (props: IInputBoxProps) => {
  const {placeholder, value, onChangeText} = props;
  
  return (
    <TextInput
      style={{height: 40, width: 300, backgroundColor: "white", color: "black", borderWidth: 1, padding: 10, borderColor: "black", margin: 10}}
      placeholder={placeholder}
      onChangeText={onChangeText}
      defaultValue={value}
      autoComplete='off'
      readOnly
    />
  );
}

export default React.memo(InputBox);
