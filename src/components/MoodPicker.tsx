import { useCallback } from 'react'
import { useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MOODS } from '../data'
import { useMoodHistory } from '../atoms'
import { theme } from '../theme'
import { TMood } from '../types'
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

const butterFliesImage = require('../../assets/images/butterflies.png')
const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable)

export const MoodPicker = () => {
  const { setMoodHistory } = useMoodHistory()

  const [selectedMood, setSelectedMood] = useState<TMood>()
  const [hasSelected, setHasSelected] = useState(false)

  const handleSelect = useCallback((selectedMood?: TMood) => {
    if (!selectedMood) {
      Alert.alert('Please select mood')
      return
    }
    setMoodHistory(selectedMood)
    setSelectedMood(undefined)
    setHasSelected(true)
  }, [])

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(selectedMood ? 1 : 0.7),
      transform: [{ scale: withTiming(selectedMood ? 1 : 0.9) }],
    }),
    [selectedMood],
  )

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={butterFliesImage} style={styles.image} />
        <Pressable
          style={styles.selectBtn}
          onPress={() => setHasSelected(false)}>
          <Text style={styles.selectBtnTxt}>Choose Another</Text>
        </Pressable>
      </View>
    )
  }

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
        <ReanimatedPressable
          onPress={() => handleSelect(selectedMood)}
          style={[styles.selectBtn, buttonStyle]}>
          <Text style={styles.selectBtnTxt}>Choose</Text>
        </ReanimatedPressable>
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
    height: 240,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    fontSize: 22,
    color: theme.colour.kruzpink,
  },
  image: {
    alignSelf: 'center',
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
    fontFamily: theme.fonts.bold,
    color: theme.colour.kruzpink,
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
  },
  selectBtn: {
    backgroundColor: theme.colour.kruzpink,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  selectBtnTxt: {
    fontFamily: theme.fonts.bold,
    color: theme.colour.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
  },
})
