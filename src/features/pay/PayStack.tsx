import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootTabsProps} from '@/navigation/BottomTabNavigator';
import {PayScreen} from './screens/PayScreen';

export type PayStackParamList = {
  PayScreen: undefined;
};

export type PayStackScreenProps<Screen extends keyof PayStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PayStackParamList, Screen>,
    RootTabsProps<'PayStack'>
  >;

const Stack = createNativeStackNavigator<PayStackParamList>();

export const PayStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="PayScreen">
      <Stack.Screen name="PayScreen" component={PayScreen} />
    </Stack.Navigator>
  );
};
