import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FieldInputStyles} from './styles';
import {colors, metrics} from '../themes';

const FieldInput = ({
  placeholder,
  value,
  onChangeValue,
  leftIconName,
  rightIconName,
  secureTextEntry,
  textContentType,
  autoCapitalize,
  autoCorrect,
  autoCompleteType,
  onPressRightIcon,
  iconColor,
  placeholderColor
}) => {
  return (
    <View style={FieldInputStyles.container}>
      
      <Icon
        name={leftIconName}
        color={iconColor}
        size={metrics.size20}
        style={FieldInputStyles.iconStyle}
      />
      <TextInput
        onChangeValue={onChangeValue}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        style={FieldInputStyles.textStyle}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoCompleteType={autoCompleteType}
      />
      <TouchableOpacity onPress={onPressRightIcon}>
        <Icon
          name={rightIconName}
          color={iconColor}
          size={metrics.size20}
          style={FieldInputStyles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FieldInput;
