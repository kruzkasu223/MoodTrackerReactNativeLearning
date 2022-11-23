import { MoodOptionWithTimeStamp, TMood } from '../types'
import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialMoodHistory: never[] = []
const MOOD_HISTORY_STORE_KEY = 'mood_history'

const storage = {
  ...createJSONStorage<MoodOptionWithTimeStamp[]>(() => AsyncStorage),
  delayInit: true,
}

const moodHistoryAtom = atomWithStorage<MoodOptionWithTimeStamp[]>(
  MOOD_HISTORY_STORE_KEY,
  initialMoodHistory,
  storage,
)

export const useMoodHistory = () => {
  const [value, setValue] = useAtom(moodHistoryAtom)

  const setMoodHistory = (selectedMood: TMood) => {
    setValue(v => [{ mood: selectedMood, timestamp: Date.now() }, ...v])
  }

  return { moodHistory: value, setMoodHistory }
}
