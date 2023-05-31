/**
 *
 * DudesBrand
 *
 */
// import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

interface Props {}

export function DudesBrand(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <ScrollView>
      <View>
        <Text>{/*  {t(...messages.someThing())}  */}</Text>
      </View>
    </ScrollView>
  );
}
