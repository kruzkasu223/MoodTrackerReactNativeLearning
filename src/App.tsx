import { NavigationContainer } from '@react-navigation/native'
import { BottomTabsNavigator } from './routes'

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}
