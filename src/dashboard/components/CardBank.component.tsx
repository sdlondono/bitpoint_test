import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { memo } from 'react'
import { Bank } from '../types/home'
import { theme } from '../../theme'
type CardBankComponentProps = Bank & {
  onPress: (bank: Bank) => void
}
const CardBankComponent: React.FC<CardBankComponentProps> = ({
  bankName,
  description,
  url,
  age,
  onPress
}) => {
  return (
    <Pressable
      style={styles.container}
      testID="card_bank"
      onPress={() => onPress({ bankName, description, url, age })}
    >
      <Image source={{ uri: url }} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.h1}>{bankName}</Text>
        <Text style={styles.h2}>{description}</Text>
        <Text style={styles.h2}>age: {age}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.slate800,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10
  },
  image: {
    width: 100,
    height: 100
  },
  h1: {
    fontFamily: 'FiraCode_500Medium',
    color: theme.colors.zinc300,
    fontSize: 16
  },
  h2: {
    fontFamily: 'FiraCode_400Regular',
    color: theme.colors.zinc400,
    fontSize: 14
  }
})

export default memo(CardBankComponent)
