import React, { useRef, useState } from 'react';
import { Image, Switch } from 'react-native';

import logo from '~/assets/logo.png';

import { Background } from '~/components';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ProviderContainer,
  ProviderText,
} from './styles';

const SignUp = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProvider, setIsProvider] = useState(false);

  const loading = false;

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  const handleIsProvider = () => {
    setIsProvider(!isProvider);
  };

  return (
    <Background>
      <Container>
        <Image source={logo} />

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
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <ProviderContainer>
            <ProviderText>Você é um prestador?</ProviderText>

            <Switch value={isProvider} onValueChange={handleIsProvider} />
          </ProviderContainer>

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;
