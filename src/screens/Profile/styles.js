import { Platform } from 'react-native';
import styled from 'styled-components/native';

import colors from '~/styles/colors';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

export const AvatarButtonText = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  color: ${colors.PRIMARY};
`;

export const FormContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'position',
  keyboardVerticalOffset: 40,
})`
  flex: 2;
  padding: 0 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 16px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
