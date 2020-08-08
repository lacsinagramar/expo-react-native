import { Platform, StyleSheet } from 'react-native'
import { $black, $grey, $white, $darkBlue } from '~/utils/color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $white
  },
  developmentModeText: {
    marginBottom: 20,
    color: $black,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: $grey
  },
  codeHighlightContainer: {
    backgroundColor: $white,
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: $grey,
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: $black,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: $white,
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: $grey,
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: $darkBlue
  },
  headerRightIcon: {
    marginRight: 20
  }
})
