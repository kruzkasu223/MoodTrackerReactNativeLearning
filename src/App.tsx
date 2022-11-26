import { NavigationContainer } from '@react-navigation/native'
import { Platform, UIManager } from 'react-native'
import { BottomTabsNavigator } from './routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'

if (Platform.OS === 'android')
  UIManager?.setLayoutAnimationEnabledExperimental?.(true)

export const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
