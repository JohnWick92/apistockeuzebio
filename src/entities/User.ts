export interface UserProps {
  code_pk: string
  name: string
  login: string
  password: string
  token: string
}

export class User {
  private props: UserProps

  get code_pk() {
    return this.props.code_pk
  }

  get name() {
    return this.props.name
  }

  get login() {
    return this.props.login
  }

  get password() {
    return this.props.password
  }

  constructor(props: UserProps) {
    this.props = props
  }
}
