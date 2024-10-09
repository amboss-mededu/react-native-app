import {useState} from 'react';
import diabetes from '../../data/diabetes';
import { FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArticleSection } from '../article/ArticleSection';
import { Sheet } from '../shared/Sheet';
import { Phrasionary } from '../article/Phrasionary';
import phraseGroup from '../../data/phraseGroup';
import { Heading } from '../shared/Heading';

export function Article() {
  const [phraseGroupId, setPhraseGroupId] = useState('');
  const phraseGroupElm = phraseGroupId && phraseGroup[phraseGroupId] ? (
    <Sheet content={<Phrasionary id={phraseGroupId} />} onClose={() => setPhraseGroupId('')} />
  ) : null;

  return (
    <SafeAreaView style={styles.container}>
      <Heading level={1}>{diabetes.title}{'\n'}</Heading>
       <FlatList
        data={diabetes.sections}
        renderItem={({item}) => <ArticleSection item={item} onLinkPress={(id) => setPhraseGroupId(id) }/>}
        keyExtractor={(section) => section.id}
        showsHorizontalScrollIndicator={true}
      />
       {phraseGroupElm}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  section: {
    marginVertical: 8,
  },
});