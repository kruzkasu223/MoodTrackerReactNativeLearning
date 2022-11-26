import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native'
import { format } from 'date-fns'
import { MoodOptionWithTimeStamp } from '../types'
import { theme } from '../theme'
import { useMoodHistory } from '../atoms'
import { useCallback } from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Reanimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

const maxSwipe = 80

type P = {
  moodItem: MoodOptionWithTimeStamp
}

export const MoodItemRow = ({ moodItem }: P) => {
  const { handleDeleteMood } = useMoodHistory()
  const translateX = useSharedValue(0)

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    handleDeleteMood(moodItem.timestamp)
  }, [moodItem])

  const handleDeleteWithDalay = useCallback(() => {
    setTimeout(handleDelete, 100)
  }, [handleDelete])

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: e => {
        translateX.value = e.translationX
      },
      onEnd: e => {
        if (Math.abs(e.translationX) > maxSwipe) {
          translateX.value = withTiming(1000 * Math.sign(e.translationX))
          runOnJS(handleDeleteWithDalay)()
        } else {
          translateX.value = withTiming(0)
        }
      },
    },
    [],
  )

  const cardStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }),
    [],
  )

  return (
    <PanGestureHandler minDist={100} onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.moodItem, cardStyle]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{moodItem.mood.emoji}</Text>
          <View>
            <Text style={styles.moodDescription}>
              {moodItem.mood.description}
            </Text>
            <Text style={styles.moodDate}>
              {format(
                new Date(moodItem.timestamp),
                "do MMM yyyy 'at' hh:mm:ss a",
              )}
            </Text>
          </View>
        </View>
        <Pressable onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  moodItem: {
    backgroundColor: theme.colour.white,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
    color: theme.colour.white,
  },
  moodDate: {
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    fontSize: 12,
  },
  moodDescription: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colour.kruzpink,
    textTransform: 'uppercase',
  },
  deleteText: {
    fontFamily: theme.fonts.regular,
    color: theme.colour.kruzpink,
  },
})
