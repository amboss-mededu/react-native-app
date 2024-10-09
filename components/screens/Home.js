import {Button, View} from 'react-native'

export function Home({navigation}) {
  return (
    <View>
      <Button
        title="Buttons"
        onPress={() => navigation.navigate('Buttons')}
      />
      <Button
        title="Article"
        onPress={() => navigation.navigate('Article')}
      />
    </View>
  );
}