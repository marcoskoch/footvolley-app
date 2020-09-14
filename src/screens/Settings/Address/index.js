import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '~/styles/colors';

import { Background } from '~/components';
import {
  Container,
  Form,
  FormContainer,
  FormInput,
  SubmitButton,
  PickerContainer,
  Picker,
} from './styles';

const Address = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confimPasswordRef = useRef();
  const estadoRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState(undefined);

  const handleSubmit = () => {};

  useEffect(() => {
    const getEstados = async () => {
      const response = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      );

      const ufInitials = await response.data.map((uf) => {
        return { label: uf.nome, value: uf.sigla };
      });

      setEstados(ufInitials);
    };

    getEstados();
  }, []);

  const placeholder = {
    label: 'Selecione o estado...',
    value: null,
  };

  return (
    <Background>
      <Container>
        <FormContainer
          contentContainerStyle={{ backgroundColor: colors.BACKGROUND }}
        >
          <Form>
            <FormInput
              icon="place"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Rua"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              icon="place"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Número"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <PickerContainer>
              <MaterialIcons
                name="place"
                size={20}
                color="rgba(255, 255, 255, 0.6)"
              />
              <Picker>
                <RNPickerSelect
                  placeholder={placeholder}
                  items={estados}
                  value={estado}
                  onValueChange={(value) => {
                    setEstado(value);
                  }}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 8,
                    },
                  }}
                  Icon={() => {
                    return (
                      <MaterialIcons
                        name="keyboard-arrow-down"
                        size={24}
                        color="rgba(255, 255, 255, 0.6)"
                      />
                    );
                  }}
                  ref={estadoRef}
                />
              </Picker>
            </PickerContainer>

            <FormInput
              icon="place"
              placeholder="Município"
              ref={passwordRef}
              returnKeyType="next"
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="place"
              placeholder="CEP"
              ref={confimPasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <SubmitButton loading={false} onPress={handleSubmit}>
              Salvar
            </SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </Background>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 12,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingVertical: 12,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Address;
