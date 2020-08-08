/**
 * Currently, there's a known issue where react-native is not supporting AlarmManager
 * in Timing to allow proper handling of long timers
 *
 * We are ignoring this warning for now, as it has no impact whatsoever
 *
 * See issue https://github.com/facebook/react-native/issues/12981 for more details.
 */

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Setting a timer'])
console.ignoredYellowBox = ['Setting a timer']
