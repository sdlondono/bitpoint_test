import {
  RouteProp,
  NativeStackNavigationProp,
  NavigationProp
} from '@react-navigation/native'
import type { Bank } from './home'

export type RootStackParamList = {
  Home: undefined
  Details: Bank
}

export declare type RouteNamesKeys = keyof RootStackParamList

export declare type ScreenNavigationProp<RouteName extends RouteNamesKeys> =
  NavigationProp<RootStackParamList, RouteName>

export declare type ScreenRouteProp<RouteName extends RouteNamesKeys> =
  RouteProp<RootStackParamList, RouteName>
