import { object, string } from 'yup'

const schema = object().shape({
  email_address: string().required(),
  password: string().required()
})

const fields = {
  email_address: '',
  password: ''
}

export { schema, fields }
