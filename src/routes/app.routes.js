import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import ProviderAppointmentsScreen from '~/screens/ProviderAppointments';
import ClientAppointmentsScreen from '~/screens/ClientAppointments';
import NotificationsScreen from '~/screens/Notifications';
import SettingsScreen from '~/screens/Settings';
import ProfileScreen from '~/screens/Profile';
import AddressScreen from '~/screens/Settings/Address';
import SelectProviderScreen from '~/screens/New/SelectProvider';
import SelectCourtScreen from '~/screens/New/SelectCourt';
import SelectDateTimeScreen from '~/screens/New/SelectDateTime';
import ConfirmScreen from '~/screens/New/Confirm';

const Stack = createStackNavigator();
const SettingStack = createStackNavigator();
const NewStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  ProviderAppointments: {
    name: 'home',
  },
  ClientAppointments: {
    name: 'home',
  },
  Notifications: {
    name: 'notifications',
  },
  Settings: {
    name: 'settings',
  },
  New: {
    name: 'add-circle-outline',
  },
};

const AppTabs = ({ provider }) => {
  const ProviderTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
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

  const NewScreen = ({ navigation }) => {
    return (
      <NewStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.MATTE_BLACK },
          headerTitleStyle: {
            color: colors.WHITE,
          },
        }}
      >
        <NewStack.Screen
          name="SelectProvider"
          component={SelectProviderScreen}
          options={{
            title: 'Selecione sua Arena',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ClientAppointments');
                }}
              >
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
        <NewStack.Screen
          name="CourtProvider"
          component={SelectCourtScreen}
          options={{
            title: 'Selecione a Quadra',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.popToTop();
                }}
              >
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
        <NewStack.Screen
          name="SelectDateTime"
          component={SelectDateTimeScreen}
          options={{
            title: 'Selecione a Data',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.popToTop();
                }}
              >
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
        <NewStack.Screen
          name="Confirm"
          component={ConfirmScreen}
          options={{
            title: 'Confirmar reserva',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.popToTop();
                }}
              >
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
      </NewStack.Navigator>
    );
  };

  const ClientTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
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
        name="ClientAppointments"
        component={ClientAppointmentsScreen}
        options={{
          title: 'Agendamentos',
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          title: 'Reservar',
          tabBarVisible: false,
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
      <SettingStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.MATTE_BLACK },
          headerTitleStyle: {
            color: colors.WHITE,
          },
        }}
      >
        <SettingStack.Screen
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
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
        <SettingStack.Screen
          name="Address"
          component={AddressScreen}
          options={{
            title: 'Endereço',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon name="chevron-left" size={24} color={colors.WHITE} />
              </TouchableOpacity>
            ),
          }}
        />
      </SettingStack.Navigator>
    );
  };

  const HomeTabs = provider ? ProviderTabs : ClientTabs;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default AppTabs;
