import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ScreenRouteProp } from '../types/app'
import { theme } from '../../theme'

const DetailBankComponent = () => {
  const { params } = useRoute<ScreenRouteProp<'Details'>>()
  const { bankName, description, url, age } = params
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} resizeMode="contain" />
      <View style={styles.wrapLabels}>
        <Text style={styles.bankLabel}>{bankName}</Text>
        <Text style={styles.ageLabel}>Age: {age}</Text>
        <Text style={styles.descriptionLabel}>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium ipsum odio id quos officia soluta dolore velit consectetur
          vel! Modi?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  wrapLabels: {
    flex: 1,
    marginTop: 10
  },
  image: {
    height: 300
  },
  bankLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  descriptionLabel: {
    fontSize: 16,
    color: 'white'
  },
  ageLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default DetailBankComponent
