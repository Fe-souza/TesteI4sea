import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Header = styled.View`
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #000;
  border-width: 1px;
  border-color: #000;
  padding: 16px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  background-color: blue;
  margin: 10px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: #fff;
  padding: 10px;
  font-size: 16px;
`;

export const Box = styled.View``;
