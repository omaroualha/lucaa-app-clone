import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootTabsProps} from '@/navigation/BottomTabNavigator';
import {CheckInScreen} from './screens/ChekInScreen';

export type CheckInStackParamList = {
  CheckIn: undefined;
};

export type CheckInStackScreenProps<
  Screen extends keyof CheckInStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<CheckInStackParamList, Screen>,
  RootTabsProps<'CheckInStack'>
>;

const Stack = createNativeStackNavigator<CheckInStackParamList>();

export const CheckInStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="CheckIn">
      <Stack.Screen name="CheckIn" component={CheckInScreen} />
    </Stack.Navigator>
  );
};
