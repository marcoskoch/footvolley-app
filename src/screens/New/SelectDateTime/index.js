import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Background } from '~/components';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

const SelectDateTime = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { court, provider } = route.params;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`courts/${court.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, court.id]);

  const handleSelectHour = time => {
    navigation.navigate('New', {
      screen: 'Confirm',
      params: { court, time, provider },
    });
  };

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={onChange} />

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
