import {useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Alert} from 'react-native';
import Diabetes from '../data/Diabetes';
import RenderHtml from 'react-native-render-html';
import { BottomSheet } from '@rneui/themed';


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
  
  return (
    <>
      <RenderHtml contentWidth={width} source={{html}} baseStyle={{fontSize: 16, lineHeight: 22}} enableCSSInlineProcessing={false} renderersProps={renderersProps} />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <Text>Something</Text>
      </BottomSheet>
    </>
  )
}

export function Article() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>{Diabetes.title}{'\n'}</Text>
        <Text style={styles.sectionHeaderText}>{Diabetes.sections[0].title}{'\n'}</Text>
        <RichText html={Diabetes.sections[0].text} />
      </Text>
    </View>
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
