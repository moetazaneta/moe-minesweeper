import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
})