import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {FieldInputStyles} from './styles';
import {colors} from '../themes';

const FieldInput = ({
  placeholder,
  value,
  onChangeValue,
  secureTextEntry,
  textContentType,
  autoCapitalize,
  autoCorrect,
  autoCompleteType,
  onPressRightIcon,
  image,
  label,
}) => {
  return (
    <View style={FieldInputStyles.root}>
      <Text style={FieldInputStyles.label}>{label}</Text>
      <View style={FieldInputStyles.container}>
        <TextInput
          onChangeText={onChangeValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.black}
          secureTextEntry={secureTextEntry}
          textContentType={textContentType}
          style={FieldInputStyles.textStyle}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoCompleteType={autoCompleteType}
        />
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image source={image} style={FieldInputStyles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FieldInput;
