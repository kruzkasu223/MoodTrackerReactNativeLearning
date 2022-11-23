import { StyleSheet, View, VirtualizedList } from 'react-native'
import { MoodItemRow } from '../components/MoodItemRow'
import { useMoodHistory } from '../atoms'
import { MoodOptionWithTimeStamp } from '../types'

export const History = () => {
  const { moodHistory } = useMoodHistory()

  return (
    <View style={styles.container}>
      <VirtualizedList<MoodOptionWithTimeStamp>
        data={moodHistory}
        keyExtractor={m => m.timestamp.toString()}
        renderItem={({ item }) => (
          <MoodItemRow
            moodItem={item}
            key={item.timestamp + item.mood.description}
          />
        )}
        getItemCount={colours => colours?.length}
        getItem={(moods, index) => moods[index]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
