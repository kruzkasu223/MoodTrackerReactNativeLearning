import { groupBy } from 'lodash'
import { StyleSheet, Text, View } from 'react-native'
import { VictoryPie } from 'victory-native'
import { useMoodHistory } from '../atoms'
import { theme } from '../theme'

export const Analytics = () => {
  const { moodHistory } = useMoodHistory()

  const data = Object.entries(groupBy(moodHistory, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  )

  return (
    <View style={styles.container}>
      <VictoryPie
        innerRadius={50}
        colorScale={[
          theme.colour.kruzpink,
          theme.colour.blue,
          theme.colour.lavender,
          theme.colour.grey,
          theme.colour.purple,
        ]}
        data={data}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
