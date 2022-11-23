import { View, Text, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import { MoodOptionWithTimeStamp } from '../types'
import { theme } from '../theme'

type P = {
  moodItem: MoodOptionWithTimeStamp
}

export const MoodItemRow = ({ moodItem }: P) => {
  return (
    <View style={styles.moodItem}>
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
    </View>
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
    textAlign: 'center',
    fontSize: 12,
  },
  moodDescription: {
    fontSize: 16,
    color: theme.colour.kruzpink,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
