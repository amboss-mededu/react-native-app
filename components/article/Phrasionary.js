import phraseGroup from '../../data/phraseGroup';
import { Heading } from '../shared/Heading';
import { StyledText } from '../shared/StyledText';

export function Phrasionary({id}) {
  return (
    <>
      <Heading level={2}>{phraseGroup[id].title}{'\n'}</Heading>
      <StyledText>{phraseGroup[id].abstract}</StyledText>
    </>
  )
}
