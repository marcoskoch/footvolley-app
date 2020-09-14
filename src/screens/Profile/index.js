import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '~/contexts/auth';

import logo from '~/assets/arena.jpg';
import colors from '~/styles/colors';

import { Background } from '~/components';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  AvatarContainer,
  Avatar,
  FormContainer,
} from './styles';

const Profile = () => {
  const { user } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confimPasswordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loading = false;

  const handleSubmit = () => {
    console.log('asdf');
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  return (
    <Background>
      <Container>
        <AvatarContainer>
          <Avatar source={logo} />
        </AvatarContainer>
        <FormContainer
          contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
        >
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha atual"
              ref={passwordRef}
              returnKeyType="next"
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Nova senha secreta"
              ref={passwordRef}
              returnKeyType="next"
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Confirmar senha"
              ref={confimPasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Salvar
            </SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </Background>
  );
};

export default Profile;
