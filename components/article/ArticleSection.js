import {useState} from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { RichText } from '../shared/RichText';
import Collapsible from 'react-native-collapsible';
import { Heading } from '../shared/Heading';

export function ArticleSection({item, onLinkPress}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.section}>
      <Pressable onPress={() => setIsCollapsed(isCollapsed => !isCollapsed)} style={styles.title}>
        <Heading level={2}>{item.title}</Heading>
      </Pressable>
      <Collapsible collapsed={isCollapsed}>
        <RichText html={item.text} onLinkPress={onLinkPress}/>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
  },
  title: {
    padding: 10,
    backgroundColor: 'rgb(210, 230, 255)'
  }
});