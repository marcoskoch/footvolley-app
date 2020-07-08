import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '~/styles/colors';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
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

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: 16px;
`;

export const ProviderContainer = styled.View`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderText = styled.Text`
  font-size: 15px;
  color: ${colors.WHITE};
`;
