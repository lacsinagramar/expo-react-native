import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Content, Text, Button } from 'native-base'
import { compose } from 'ramda'

import styles from './styles'

const RegistrationScreen = ({ navigation }) => (
  <Container>
    <Content contentContainerStyle={styles.content} padder>
      <Text>I am registration page </Text>
      <Button
        block
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </Button>
    </Content>
  </Container>
)

RegistrationScreen.navigationOptions = {
  header: null
}

RegistrationScreen.propTypes = {
  navigation: PropTypes.object
}

const mapDispatchToProps = () => ({})

const withConnect = connect(null, mapDispatchToProps)

export default compose(withConnect)(RegistrationScreen)
