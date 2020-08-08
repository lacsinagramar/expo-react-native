import { switchFn } from 'ramda'

// eslint-disable-next-line import/prefer-default-export
export const getHeaderTitle = ({ route, titles = {} }) => {
  const routeName =
    route.state?.routes[route.state.index]?.name ??
    (route.params?.screen || 'Home')

  const renameTitle = switchFn(titles)(routeName)

  return renameTitle(routeName)
  // How to use:
  // navigation.setOptions({
  //   headerTitle: getHeaderTitle({
  //     route,
  //     titles: {
  //       Home: 'Hi there!'
  //     }
  //   })
  // })
}
