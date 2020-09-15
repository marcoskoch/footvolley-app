import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const CourtsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 40px;
  padding: 0 20px;
`;

export const Court = styled(RectButton)`
  background: ${colors.MATTE_BLACK}
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.WHITE};
  text-align: center;
`;
