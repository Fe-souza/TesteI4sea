import React, {useState} from 'react';
import api from '../../services';
import {Box, Button, Container, Header, Input, Text} from './styles';

export function Home() {
  const [user, setUser] = useState('');
  const [userSelected, setUserSelected] = useState('');

  function handleSearch() {
    api.get(`/users/${user}`).then(response => setUserSelected(response.data));

    console.log('==>', userSelected);
  }

  return (
    <Container>
      <Header>
        <Input
          onChangeText={value => setUser(value)}
          value={user}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button onPress={() => handleSearch()}>
          <Text>Buscar</Text>
        </Button>
      </Header>
      <Box />
    </Container>
  );
}
