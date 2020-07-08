import React from 'react';
import { Text } from 'react-native';

import { Background } from '~/components';
import { Container } from './styles';

const Profile = () => {
  return (
    <Background>
      <Container>
        <Text>Profile</Text>
      </Container>
    </Background>
  );
};

export default Profile;
