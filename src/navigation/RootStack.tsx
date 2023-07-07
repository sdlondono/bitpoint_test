import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import type { RootStackParamList } from '../dashboard/types/app'

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootStack() {
  const screenDefaultOptions = React.useMemo<NativeStackNavigationOptions>(
    () => ({
      screenOrientation: 'portrait',
      headerBackTitleVisible: false,
      headerHideShadow: true,
      headerHideBackButton: true,
      headerShown: false,
      headerLargeTitleHideShadow: true,
      contentStyle: {
        flex: 1
      },
      stackAnimation: 'slide_from_right' // slide animation for androidscree
    }),
    []
  )
  const initialRouteName = 'Home'
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={screenDefaultOptions}
      >
        <Stack.Screen
          name="Home"
          getComponent={() =>
            require('../dashboard/screens/Home.screen').default
          }
        />
        <Stack.Screen
          name="Details"
          getComponent={() =>
            require('../dashboard/screens/Details.screen').default
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

RootStack.displayName = 'RootStack'

export default RootStack
