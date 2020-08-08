import { StyleSheet } from 'react-native'
import { $lightGrey, $white, $offWhite } from '~/utils/color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $offWhite
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: $white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: $lightGrey
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1
  }
})
