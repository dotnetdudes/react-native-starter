import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type StyleType = TextStyle & ViewStyle & ImageStyle;

export type AppLayout = { [key: string]: StyleType };
