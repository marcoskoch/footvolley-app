import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  padding: 16px 0;
  background: ${colors.MATTE_BLACK};
  padding: 16px;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const AppointmentDetail = styled.View`
  padding: 8px;
  justify-content: center;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${colors.WHITE};
`;

export const Court = styled.Text`
  font-size: 16px;
  color: ${colors.WHITE};
  margin-bottom: 5px;
`;

export const AppointmentDate = styled.Text`
  font-weight: bold;
  color: ${colors.WHITE};
`;
