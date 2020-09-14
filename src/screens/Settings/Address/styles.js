import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '~/styles/colors';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const FormContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 2;
  padding: 0 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const PickerContainer = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${colors.LIGHT_BLACK};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Picker = styled.View`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
