import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '~/contexts/auth';

import colors from '~/styles/colors';
import { Background, Header, Title } from '~/components';
import {
  Container,
  ListContainer,
  ListItem,
  ItemTitle,
  ItemContainer,
  SubmitButton,
  ButtonContainer,
} from './styles';

const menus = [
  { id: 1, menu: 'Perfil', icon: 'account-edit', screen: 'Profile' },
  { id: 2, menu: 'Endereço', icon: 'map-marker', screen: 'Adress' },
  { id: 3, menu: 'Cadastrar quadra', icon: 'plus-circle', screen: 'Court' },
];

const Settings = ({ navigation }) => {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Background>
      <Header>
        <Title>Ajustes</Title>
      </Header>
      <Container>
        <ListContainer>
          {menus.map((item, index) => {
            return (
              <ItemContainer
                key={item.id}
                onPress={() =>
                  navigation.navigate('Setting', { screen: 'Profile' })
                }
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={28}
                  color={colors.LIGHT_GREY}
                />

                <ListItem last={index + 1 === menus.length}>
                  <ItemTitle>{item.menu}</ItemTitle>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={22}
                    color={colors.LIGHT_GREY}
                  />
                </ListItem>
              </ItemContainer>
            );
          })}
        </ListContainer>
        <ButtonContainer>
          <SubmitButton onPress={handleLogout}>Logout</SubmitButton>
        </ButtonContainer>
      </Container>
    </Background>
  );
};

export default Settings;
