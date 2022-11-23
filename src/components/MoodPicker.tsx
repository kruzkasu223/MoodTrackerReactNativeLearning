import { useCallback } from 'react'
import { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { MOODS } from '../data'
import { useMoodHistory } from '../atoms'
import { theme } from '../theme'
import { TMood } from '../types'

export const MoodPicker = () => {
  const { setMoodHistory } = useMoodHistory()

  const [selectedMood, setSelectedMood] = useState<TMood>()

  const handleSelect = useCallback((selectedMood?: TMood) => {
    if (!selectedMood) {
      Alert.alert('Please select mood')
      return
    }
    setMoodHistory(selectedMood)
    setSelectedMood(undefined)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How's your mood right now?</Text>
      <View style={styles.emojiContainer}>
        {MOODS.map(mood => (
          <View key={mood.emoji} style={styles.emoji}>
            <Pressable
              onPress={() => {
                setSelectedMood(m =>
                  m?.emoji === mood.emoji ? undefined : mood,
                )
              }}
              style={[
                styles.moodItem,
                selectedMood?.emoji === mood.emoji && styles.selectedItem,
              ]}>
              <Text style={styles.emojiIcon}>{mood.emoji}</Text>
            </Pressable>
            <Text
              style={[
                styles.emojiText,
                selectedMood?.emoji === mood.emoji && styles.emojiTextBorder,
              ]}>
              {mood.description}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => handleSelect(selectedMood)}
          style={styles.selectBtn}>
          <Text style={styles.selectBtnTxt}>Choose</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colour.kruzpink,
    borderWidth: 2,
    padding: 20,
    borderRadius: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: theme.colour.kruzpink,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emoji: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodItem: {
    padding: 14,
    borderRadius: 8,
    borderColor: theme.colour.kruzpink,
    borderWidth: 2,
    marginBottom: 2,
  },
  emojiIcon: {
    color: theme.colour.white,
  },
  selectedItem: {
    backgroundColor: theme.colour.kruzpink,
    borderColor: theme.colour.white,
  },
  emojiText: {
    color: theme.colour.kruzpink,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  emojiTextBorder: {
    borderBottomColor: theme.colour.kruzpink,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  selectBtn: {
    backgroundColor: theme.colour.kruzpink,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  selectBtnTxt: {
    color: theme.colour.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
