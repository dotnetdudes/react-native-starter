/**
 *
 * DudesBrand
 *
 */
// import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { View, Image } from 'react-native';
import DudesLogo from '@/assets/Images/dudes.png';

interface Props {
  height?: number | string;
  width?: number | string;
}

function DudesBrand({ height, width }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <View style={{ height, width }}>
      <Image source={DudesLogo} />
    </View>
  );
}

DudesBrand.defaultProps = {
  height: 67,
  width: 67,
};

export default DudesBrand;
