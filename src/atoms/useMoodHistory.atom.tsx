import { MoodOptionWithTimeStamp, TMood } from '../types'
import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'

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

  const setMoodHistory = useCallback((selectedMood: TMood) => {
    setValue(v => [{ mood: selectedMood, timestamp: Date.now() }, ...v])
  }, [])

  const handleDeleteMood = useCallback((moodTimeStamp: number) => {
    setValue(v => v?.filter(m => m.timestamp !== moodTimeStamp))
  }, [])

  const handleClearMoodHistory = useCallback(() => {
    setValue(initialMoodHistory)
  }, [])

  return {
    moodHistory: value,
    setMoodHistory,
    handleDeleteMood,
    handleClearMoodHistory,
  }
}
