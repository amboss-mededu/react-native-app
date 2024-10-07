import {useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Alert} from 'react-native';
import Diabetes from '../data/Diabetes';
import RenderHtml from 'react-native-render-html';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

function RichText({html}) {
  const { width } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);
  const renderersProps = {
    a: {
      onPress: (event, href) => {
        setIsVisible(true);
      }
    }
  };
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  console.log('isVisible', isVisible)
  return (
    <>
      <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
    />
    <BottomSheet modalProps={{}} isVisible={true}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
    </>
  )
}

export function Article() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>{Diabetes.title}{'\n'}</Text>
        <Text style={styles.sectionHeaderText}>{Diabetes.sections[0].title}{'\n'}</Text>
        <RichText html={Diabetes.sections[0].text} />
      </Text>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  baseText: {
    fontSize: 15,
    lineHeight: 30
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionHeaderText: {
    fontSize: 20,
  }

});
