import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Element } from 'domhandler';
import { replaceElement } from 'domutils';

function onElement(element) {
  // Replace span with anchor tag
  if (element.attribs['data-type'] === 'link') {
    const link = new Element('a', {
      href: '#',
      ['data-phrasegroup-id']: element.attribs['data-phrasegroup-id'],
    }, element.children)
    replaceElement(element, link);
  }
}


const domVisitors = {
  onElement: onElement
};

export function RichText({html, onLinkPress}) {
  const { width } = useWindowDimensions();
  
  function LinkRenderer({
    TDefaultRenderer,
    ...props
  }) {
    return (
      <TDefaultRenderer
        {...props}
        onPress={() => onLinkPress(props.tnode.domNode.attribs['data-phrasegroup-id'])}
      />
    );
  }

  const renderers = {
    a: LinkRenderer,
  };

  return (
    <RenderHtml baseStyle={{fontSize: 16, fontFamily: 'Lato', lineHeight: 24}} contentWidth={width} source={{html}} renderers={renderers} domVisitors={domVisitors}/>
  )
}
