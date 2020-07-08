import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const AppointmentListContainer = styled.ScrollView`
  flex-direction: column;
`;

export const Appointment = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  background: ${colors.MATTE_BLACK};
  padding: 8px 16px;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const AppointmentDetail = styled.View`
  padding: 0px 16px;
  justify-content: center;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${colors.WHITE};
`;

export const Court = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  margin-bottom: 5px;
`;

export const AppointmentDate = styled.Text`
  font-weight: bold;
  color: ${colors.WHITE};
`;

export const AppointmentAction = styled.View`
  flex: 1;
  height: 65px;
  align-items: flex-end;
  justify-content: space-between;
`;
