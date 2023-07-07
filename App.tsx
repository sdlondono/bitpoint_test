import HomeScreen from './src/dashboard/screens/Home.screen'
import {
  useFonts,
  FiraCode_300Light,
  FiraCode_400Regular,
  FiraCode_500Medium,
  FiraCode_600SemiBold,
  FiraCode_700Bold
} from '@expo-google-fonts/fira-code'
import LoadingComponent from './src/dashboard/components/Loading.component'
import { StatusBar } from 'react-native'
import RootStack from './src/navigation/RootStack'
export default function App() {
  let [fontsLoaded] = useFonts({
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold
  })

  if (!fontsLoaded) {
    return <LoadingComponent />
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootStack />
    </>
  )
}
