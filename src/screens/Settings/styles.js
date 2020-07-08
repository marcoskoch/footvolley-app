import styled from 'styled-components/native';
import colors from '~/styles/colors';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ListContainer = styled.View`
  width: 100%;
  padding: 0 16px;
  background: ${colors.MATTE_BLACK};
  flex-direction: column;
  border-bottom-color: ${colors.MATTE_GREY};
  border-bottom-width: 1px;
  border-top-color: ${colors.MATTE_GREY};
  border-top-width: 1px;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;
`;

export const ListItem = styled.View`
  flex: 1;
  height: 50px;
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${colors.MATTE_GREY};
  border-bottom-width: ${(props) => (props.last ? 0 : 1)};
`;
export const ItemTitle = styled.Text`
  color: ${colors.LIGHT_GREY};
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  padding: 8px;
`;

export const SubmitButton = styled(Button)``;
