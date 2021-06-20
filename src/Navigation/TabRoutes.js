import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Messages} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import TabBarIconComp from '../Components/TabBarIconComp';
import strings from '../constants/lang';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.themeColor,
      }}
      initialRouteName={navigationStrings.HOME}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => {
            if (focused)
              return (
                <TabBarIconComp
                  imgSrc={imagePath.ic_home}
                  imgStyle={{tintColor: color}}
                />
              );
            else
              return (
                <TabBarIconComp
                  imgSrc={imagePath.ic_home}
                  imgStyle={{tintColor: color}}
                />
              );
          },
          tabBarLabel: strings.HOME,
        }}
      />
      <Tab.Screen
        name={navigationStrings.MESSAGES}
        component={Messages}
        options={{
          tabBarIcon: ({focused, color}) => {
            if (focused)
              return (
                <TabBarIconComp
                  imgSrc={imagePath.ic_messages}
                  imgStyle={{tintColor: color}}
                />
              );
            else
              return (
                <TabBarIconComp
                  imgSrc={imagePath.ic_messages}
                  imgStyle={{tintColor: color}}
                />
              );
          },
          tabBarLabel: strings.MESSAGES,
        }}
      />
    </Tab.Navigator>
  );
}
