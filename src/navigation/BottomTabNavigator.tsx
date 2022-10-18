import React, {FC} from 'react';
import {Dimensions, Image, ImageSourcePropType, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootStackScreenProps} from './RootStack';
import {icons} from '../assets';
import {DiscoveryScreen} from '../features/discovery/DiscoveryScreen';
import {useTheme} from 'styled-components';
import {Box} from '../components';

enum BottomTabs {
  DISCOVERY = 'DISCOVERY',
  MY_LUCA = 'MY_LUCA',
  CHECK_IN = 'CHECK_IN',
  PAY = 'PAY',
  ACCOUNT = 'ACCOUNT',
}

const TABS = [
  BottomTabs.DISCOVERY,
  BottomTabs.MY_LUCA,
  BottomTabs.CHECK_IN,
  BottomTabs.PAY,
  BottomTabs.ACCOUNT,
];

export type RootTabParamList = {
  Discovery: undefined;
  MyLuca: undefined;
  CheckIn: undefined;
  Pay: undefined;
  Account: undefined;
};
export type RootTabsProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootTabParamList, Screen>,
    RootStackScreenProps<'Root'>
  >;

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const {width: deviceWidth} = Dimensions.get('window');

export const BottomTabNavigator: FC = () => {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="CheckIn"
      screenOptions={{
        tabBarLabelStyle: {color: theme.colors.primary.light},
      }}>
      <BottomTab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={() => ({
          title: 'Discovery',
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={icons.discovery} focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="MyLuca"
        component={DiscoveryScreen}
        options={() => ({
          title: 'MyLuca',
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={icons.myLuca} focused={focused} />
          ),
        })}
      />

      <BottomTab.Screen
        name="CheckIn"
        component={DiscoveryScreen}
        options={() => ({
          title: 'Check-in',
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={icons.checkIn} focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Pay"
        component={DiscoveryScreen}
        options={() => ({
          title: 'Pay',
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={icons.pay} focused={focused} />
          ),
        })}
      />

      <BottomTab.Screen
        name="Account"
        component={DiscoveryScreen}
        options={() => ({
          title: 'Account',
          tabBarIcon: ({focused}) => (
            <TabBarIcon icon={icons.account} focused={focused} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props: {icon: ImageSourcePropType; focused: boolean}) => {
  const theme = useTheme();
  return (
    <Box
      borderTopColor={theme.colors.primary.light}
      borderTopWidth={props.focused ? 3 : 0}
      paddingTop={6}
      alignItems="center"
      width={deviceWidth / TABS.length}>
      <Image source={props.icon} style={{width: 24, height: 24}} />
    </Box>
  );
};
