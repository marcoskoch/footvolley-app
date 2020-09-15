import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 40px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: ${colors.MATTE_BLACK}
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.WHITE};
  text-align: center;
`;
