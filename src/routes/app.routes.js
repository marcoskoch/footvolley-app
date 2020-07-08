import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '~/styles/colors';

import ProviderAppointmentsScreen from '~/screens/ProviderAppointments';
import NotificationsScreen from '~/screens/Notifications';
import SettingsScreen from '~/screens/Settings';
import ProfileScreen from '~/screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  ProviderAppointments: {
    lib: MaterialIcons,
    name: 'home',
  },
  Notifications: {
    lib: MaterialIcons,
    name: 'notifications',
  },
  Settings: {
    lib: MaterialIcons,
    name: 'settings',
  },
};

const AppTabs = ({ provider }) => {
  const HomeTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.MATTE_BLACK,
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.LIGHT_GREY,
      }}
    >
      <Tab.Screen
        name="ProviderAppointments"
        component={ProviderAppointmentsScreen}
        options={{
          title: 'Agendamentos',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );

  const Setting = ({ navigation }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.MATTE_BLACK },
          headerTitleStyle: {
            color: colors.WHITE,
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <MaterialIcons
                  name="chevron-left"
                  size={24}
                  color={colors.WHITE}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default AppTabs;
