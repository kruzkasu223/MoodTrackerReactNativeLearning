import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MOODS } from '../data'
import { theme } from '../theme'
import { TMoods } from '../types'

export const MoodPicker = () => {
  const [selectedMood, setSelectedMood] = useState<TMoods>()

  return (
    <View style={styles.container}>
      {MOODS.map(mood => (
        <View key={mood.emoji}>
          <Pressable
            onPress={() => {
              setSelectedMood(m => (m?.emoji === mood.emoji ? undefined : mood))
            }}
            style={[
              styles.moodItem,
              selectedMood?.emoji === mood.emoji && styles.selectedItem,
            ]}>
            <Text>{mood.emoji}</Text>
          </Pressable>
          {/* {selectedMood?.emoji === mood.emoji && (
            <Text style={styles.text}>{mood.description}</Text>
          )} */}
          <Text style={styles.text}>
            {selectedMood?.emoji === mood.emoji && mood.description}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
  },
  moodItem: {
    padding: 15,
    borderRadius: 99,
    borderColor: theme.colour.purple,
    borderWidth: 2,
  },
  selectedItem: {
    backgroundColor: theme.colour.purple,
    borderColor: theme.colour.white,
  },
  text: {
    color: theme.colour.purple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
})
