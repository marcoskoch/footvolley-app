import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <MaterialIcons name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
        {opened ? (
          <MaterialIcons name="expand-less" color="#FFF" size={20} />
        ) : (
          <MaterialIcons name="expand-more" color="#FFF" size={20} />
        )}
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
