import styled from 'styled-components/native';
import colors from '~/styles/colors';

const statusColorMap = {
  1: colors.REQUESTED,
  2: colors.CANCELED,
  3: colors.CONFIRMED,
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
  flex: 1;
  padding: 0 8px;
  justify-content: center;
  margin-left: 8px;
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

export const Status = styled.Text`
  font-weight: bold;
  color: ${(props) => statusColorMap[props.status]};
  margin-bottom: 5px;
`;
