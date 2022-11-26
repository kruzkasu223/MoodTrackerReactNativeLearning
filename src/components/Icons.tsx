import { Svg, Path, Circle } from 'react-native-svg'
import { theme } from '../theme'

type P = {
  size?: number
  color?: string
}

export const HomeIcon = ({ size = 24, color = theme.colour.kruzpink }: P) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 1 511 511.999">
      <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
    </Svg>
  )
}

export const HistoryIcon = ({
  size = 24,
  color = theme.colour.kruzpink,
}: P) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 60.123 60.123">
      <Path d="M57.124 51.893H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 33.062H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 14.231H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6z" />
      <Circle cx={4.029} cy={11.463} r={4.029} />
      <Circle cx={4.029} cy={30.062} r={4.029} />
      <Circle cx={4.029} cy={48.661} r={4.029} />
    </Svg>
  )
}

export const AnalyticsIcon = ({
  size = 24,
  color = theme.colour.kruzpink,
}: P) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 512 512">
      <Path d="M501.333 490.667H10.667C4.779 490.667 0 495.445 0 501.333 0 507.221 4.779 512 10.667 512h490.667c5.888 0 10.667-4.779 10.667-10.667-.001-5.888-4.78-10.666-10.668-10.666z" />
      <Path d="M96 362.667H32c-5.888 0-10.667 4.779-10.667 10.667v128C21.333 507.221 26.112 512 32 512h64c5.888 0 10.667-4.779 10.667-10.667v-128c0-5.888-4.779-10.666-10.667-10.666zm-10.667 128H42.667V384h42.667v106.667zM224 256h-64c-5.888 0-10.667 4.779-10.667 10.667v234.667c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667V266.667c0-5.888-4.779-10.667-10.667-10.667zm-10.667 234.667h-42.667V277.333h42.667v213.334zM352 298.667h-64c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-192c0-5.889-4.779-10.667-10.667-10.667zm-10.667 192h-42.667V320h42.667v170.667zM480 170.667h-64c-5.888 0-10.667 4.779-10.667 10.667v320c0 5.888 4.779 10.667 10.667 10.667h64c5.888 0 10.667-4.779 10.667-10.667v-320c0-5.889-4.779-10.667-10.667-10.667zm-10.667 320h-42.667V192h42.667v298.667zM64 192c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C106.667 211.136 87.531 192 64 192zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C85.333 246.421 75.776 256 64 256zM192 85.333c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667s42.667-19.136 42.667-42.667c0-23.531-19.136-42.667-42.667-42.667zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.755-9.557 21.333-21.333 21.333zM320 128c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C362.667 147.136 343.531 128 320 128zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333c0 11.754-9.557 21.333-21.333 21.333zM448 0c-23.531 0-42.667 19.136-42.667 42.667 0 23.531 19.136 42.667 42.667 42.667 23.531 0 42.667-19.136 42.667-42.667C490.667 19.136 471.531 0 448 0zm0 64c-11.776 0-21.333-9.579-21.333-21.333 0-11.755 9.557-21.333 21.333-21.333s21.333 9.579 21.333 21.333C469.333 54.421 459.776 64 448 64z" />
      <Path d="M432.939 57.728c-4.16-4.16-10.923-4.16-15.083 0l-82.773 82.773c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 007.552 3.115c2.709 0 5.44-1.024 7.531-3.115l82.773-82.773c4.16-4.16 4.16-10.923 0-15.083zM294.208 146.048l-68.523-19.541c-5.739-1.664-11.563 1.664-13.163 7.339-1.621 5.675 1.664 11.563 7.317 13.184l68.523 19.541a10.675 10.675 0 0013.184-7.339c1.622-5.653-1.663-11.563-7.338-13.184zM175.36 141.291c-3.669-4.608-10.368-5.355-14.976-1.707l-80.427 64.128c-4.608 3.691-5.376 10.389-1.685 14.997a10.658 10.658 0 008.341 4.011c2.325 0 4.672-.768 6.635-2.304l80.427-64.128c4.608-3.691 5.376-10.389 1.685-14.997z" />
    </Svg>
  )
}
