import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootTabsProps} from '@/navigation/BottomTabNavigator';
import {MyLucaScreen} from './screens/MyLucaScreen';

export type MyLucaStackParamList = {
  CheckIn: undefined;
};

export type MyLucaStackScreenProps<Screen extends keyof MyLucaStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MyLucaStackParamList, Screen>,
    RootTabsProps<'MyLucaStack'>
  >;

const Stack = createNativeStackNavigator<MyLucaStackParamList>();

export const MyLucaStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="CheckIn">
      <Stack.Screen name="CheckIn" component={MyLucaScreen} />
    </Stack.Navigator>
  );
};
