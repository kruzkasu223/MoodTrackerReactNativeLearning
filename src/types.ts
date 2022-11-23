// export type TMOODS = typeof MOODS[number]

export type TMood = {
  emoji: string
  description: string
}

export type MoodOptionWithTimeStamp = {
  mood: TMood
  timestamp: number
}
