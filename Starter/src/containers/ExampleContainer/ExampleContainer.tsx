import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ThemeSwitch from '@/providers/ThemeProvider/components/ThemeSwitch';
import { Button } from 'react-native-paper';

const ExampleContainer = () => {
  const exampleClick = () => {
    console.log('example click');
  };

  return (
    <ScrollView>
      <View>
        <Text>hi there</Text>
        <Button mode="outlined" onPress={exampleClick}>
          Log to console
        </Button>
        <ThemeSwitch />
      </View>
    </ScrollView>
  );
};

export default ExampleContainer;
