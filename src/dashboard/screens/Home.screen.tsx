import { SafeAreaView, FlatList, StyleSheet } from 'react-native'
import useGetBanks from '../hooks/useGetBanks'
import ErrorComponent from '../components/Error.component'
import LoadingComponent from '../components/Loading.component'
import type { Bank } from '../types/home'
import CardBankComponent from '../components/CardBank.component'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/core'
import { ScreenNavigationProp } from '../types/app'

const HomeScreen = () => {
  const [banks, isLoading, error, onRefresh] = useGetBanks()
  const navigation = useNavigation<ScreenNavigationProp<'Home'>>()
  if (error?.message) return <ErrorComponent message={error.message} />
  if (isLoading) return <LoadingComponent />

  const onPressCard = (bank: Bank) => navigation.navigate('Details', bank)

  const renderItem = ({ item }: { item: Bank }) => (
    <CardBankComponent {...item} onPress={onPressCard} />
  )

  return (
    <SafeAreaView style={styles.container} testID="home_screen">
      <FlatList<Bank>
        data={banks}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray900
  }
})

export default HomeScreen
