import { useFonts } from 'expo-font';
import { StyleSheet,  View } from 'react-native';
import Text from './src/components/text/text';
import Home from './src/screens/home';
import { colors } from './src/themes/colors';

export default function App() {

  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'Graphik-Regular': require('./assets/fonts/GraphikRegular.otf'),
    'Graphik-Medium': require('./assets/fonts/GraphikMedium.otf'),
  });

  if(!loaded){
    return(
      <Text>Font ia loaded....</Text>
    )
  }
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backRoColor,
  },
});
