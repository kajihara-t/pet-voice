import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import Text from '@/components/base/Text';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Text preset='title1' bold color='red' centered>
        title1
      </Text>
      <Text preset='title2' bold color='red' centered>
        title2
      </Text>
      <Text preset='title3' bold color='red' centered>
        title3
      </Text>
      <Text preset='body' color='red' centered>
        body
      </Text>
      <Text preset='caption' bold color='red' centered>
        caption
      </Text>
      <Text preset='label' bold color='red' centered>
        label
      </Text>
      <Text preset='title1'  color='red' centered fontFamily='Roboto'>
        title1 fontfamily="Roboto"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
