import { StyleSheet, Text, View } from 'react-native';

import Rotas from './routes';

export default function App() {
  return (
      <Rotas/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
