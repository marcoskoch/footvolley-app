import styled from 'styled-components/native';

import colors from '~/styles/colors';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 16px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const CourtsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 40px;
`;

export const CourtItem = styled.View`
  background: ${colors.MATTE_BLACK}
  border-radius: 4px;
  padding: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.WHITE};
  text-align: center;
`;
