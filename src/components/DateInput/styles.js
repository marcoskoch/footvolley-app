import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  margin: 30px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: ${colors.MATTE_BLACK};
  border-radius: 4px;
  margin: 0 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Picker = styled.View`
  background: ${colors.MATTE_BLACK};
  padding: 15px 30px;
  margin-top: 30px;
`;
