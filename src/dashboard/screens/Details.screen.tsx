import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Bank } from '../types/home'
import { theme } from '../../theme'
import DetailBankComponent from '../components/DetailBank.component'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../types/app'

type DetailsScreenProps = Bank
const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  const navigation = useNavigation<ScreenNavigationProp<'Details'>>()
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.goBackLabel}>{'👈'}</Text>
      </Pressable>
      <DetailBankComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray900,
    padding: 10
  },
  goBackLabel: {
    fontSize: 23
  }
})

export default DetailsScreen
