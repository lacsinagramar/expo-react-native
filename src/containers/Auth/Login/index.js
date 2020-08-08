import * as React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Button, Text } from 'native-base'
import { compose } from 'ramda'

import { login } from '~/containers/Auth/actions'

import LoginForm from './Form'
import styles from './styles'

const loginBackground = require('~/assets/images/login-background.jpg')

const LoginScreen = ({ login, navigation }) => (
  <Container>
    <ImageBackground
      source={loginBackground}
      style={{
        flex: 1,
        resizeMode: 'cover'
      }}
    >
      <Content contentContainerStyle={styles.content} padder>
        <LoginForm onSubmit={data => login(data)} />
        <Button
          block
          onPress={() => navigation.navigate('Register')}
          style={{ marginTop: 20 }}
        >
          <Text>Register</Text>
        </Button>
      </Content>
    </ImageBackground>
  </Container>
)

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
})

const withConnect = connect(null, mapDispatchToProps)

export default compose(withConnect)(LoginScreen)
