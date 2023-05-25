import * as React from 'react';
import { NativeModules, View, Text, ScrollView } from 'react-native';
import ThemeSwitch from '@/providers/ThemeProvider/components/ThemeSwitch';
const { CouchbaseModule } = NativeModules;
console.log(CouchbaseModule);

const HomeContainer = () => {
  return (
    <ScrollView>
      <View>
        <Text>hi there</Text>
        <ThemeSwitch />
      </View>
    </ScrollView>
  );
};

export default HomeContainer;
