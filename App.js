import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';

export default function App() {
  console.log('Hola');
  return <NativeRouter><Main /></NativeRouter>;
}