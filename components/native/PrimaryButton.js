import {requireNativeComponent} from 'react-native';

const PrimaryButtonView = requireNativeComponent('PrimaryButtonView');

export function PrimaryButton({title, onClick}) {
  return <PrimaryButtonView style={{flex: 1}} title={title} onClick={onClick}/>;
}