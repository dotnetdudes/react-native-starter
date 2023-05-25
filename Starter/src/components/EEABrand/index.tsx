import React from 'react';
import { View, Image } from 'react-native';
import EEALogo from '@/assets/Images/eea-logo-white-transparent.png';

interface Props {
  height?: number | string;
  width?: number | string;
}

const EEABrand = ({ height, width }: Props) => {
  return (
    <View style={{ height, width }}>
      <Image source={EEALogo} />
    </View>
  );
};

EEABrand.defaultProps = {
  height: 96,
  width: 302,
};

export default EEABrand;
