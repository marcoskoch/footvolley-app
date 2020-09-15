import React, { useState } from 'react';

import { Background } from '~/components';
import DateInput from '~/components/DateInput';
import { Container } from './styles';

const SelectDateTime = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={onChange} />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
