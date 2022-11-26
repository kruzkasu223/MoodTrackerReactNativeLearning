import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons'
import { History, Home, Analytics } from '../screens'
import { theme } from '../theme'

const BottomTabsNavigatorIcons = (size?: number, color?: string) => ({
  Home: <HomeIcon size={size} color={color} />,
  History: <HistoryIcon size={size} color={color} />,
  Analytics: <AnalyticsIcon size={size} color={color} />,
})

const BottomTabs = createBottomTabNavigator()

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: theme.fonts.regular,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colour.kruzpink,
        tabBarIcon: ({ size, color }) => {
          return BottomTabsNavigatorIcons?.(size, color)?.[
            route.name as keyof typeof BottomTabsNavigatorIcons
          ]
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
    </BottomTabs.Navigator>
  )
}
