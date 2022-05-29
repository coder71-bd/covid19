import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Advert from './src/components/Advert/Advert';
import Banner from './src/components/Banner/Banner';
import Preventions from './src/components/Preventions/Preventions';
import Text from './src/components/Text/Text';

export default function App() {
  const [loaded] = useFonts({
    GraphikRegular: require('./fonts/GraphikRegular.otf'),
    GraphikMedium: require('./fonts/GraphikMedium.otf'),
    GraphikSemibold: require('./fonts/GraphikSemibold.otf'),
  });

  if (!loaded) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View style={styles.container}>
      <Banner />
      <Preventions />
      <Advert />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
