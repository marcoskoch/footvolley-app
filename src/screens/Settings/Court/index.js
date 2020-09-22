import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '~/contexts/auth';
import api from '~/services/api';
import colors from '~/styles/colors';

import { Background } from '~/components';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  CourtsList,
  CourtItem,
  Name,
} from './styles';

const Court = ({ navigation }) => {
  const { user } = useAuth();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [courts, setCourts] = useState([]);

  const priceRef = useRef();

  const loading = false;

  const loadCourts = async () => {
    const response = await api.get(`courts/${user.id}`);
    setCourts(response.data);
  };

  useEffect(() => {
    loadCourts();
  }, []);

  const handleSubmit = async () => {
    const response = await api.post('courts', {
      name,
      price,
    });

    navigation.goBack();
  };

  const handleCancel = async id => {
    const response = await api.delete(`courts/${id}`);
    navigation.goBack();
  };

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="edit"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome da quadra"
            returnKeyType="next"
            onSubmitEditing={() => priceRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="attach-money"
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o valor da hora"
            ref={priceRef}
            returnKeyType="send"
            value={price}
            onChangeText={setPrice}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Salvar
          </SubmitButton>
        </Form>

        <CourtsList
          data={courts}
          extraData={courts}
          keyExtractor={court => String(court.id)}
          renderItem={({ item: court }) => (
            <CourtItem>
              <Name>{court.name}</Name>
              <TouchableOpacity onPress={() => handleCancel(court.id)}>
                <Icon name="event-busy" size={24} color={colors.CANCELED} />
              </TouchableOpacity>
            </CourtItem>
          )}
        />
      </Container>
    </Background>
  );
};

export default Court;
