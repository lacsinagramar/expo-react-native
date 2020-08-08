import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import {
  Button,
  Form,
  Input,
  Item,
  Label,
  Text
} from 'native-base'
import { compose } from 'ramda'

import styles from './styles'
import { schema, fields } from './model'

const LoginForm = ({ errors, handleChange, handleSubmit }) => (
  <Form>
    <Item error={!!errors.email_address} stackedLabel>
      <Label>Email Address</Label>
      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={handleChange('email_address')}
        textContentType="emailAddress"
      />
    </Item>
    <Item error={!!errors.password} stackedLabel>
      <Label>Password</Label>
      <Input
        autoCapitalize="none"
        onChangeText={handleChange('password')}
        secureTextEntry
        textContentType="password"
      />
    </Item>
    <Button
      block
      onPress={handleSubmit}
      style={styles.submitButton}
    >
      <Text>Login</Text>
    </Button>
  </Form>
)

LoginForm.propTypes = {
  errors: PropTypes.shape({
    email_address: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired
}

const props = {
  handleSubmit: (values, { props, ...formikBag }) =>
    props.onSubmit(values, formikBag),
  mapPropsToValues: () => fields,
  validationSchema: () => schema
}

export default compose(withFormik(props))(LoginForm)
