export interface MaterialProps {
  code_pk: string
  code_material: string
  description: string
  batch: string
  shelf_life: Date
  amount: number
}

export class Material {
  private props: MaterialProps

  get code_pk() {
    return this.props.code_pk
  }

  get code_material() {
    return this.props.code_material
  }

  get description() {
    return this.props.description
  }

  get batch() {
    return this.props.batch
  }

  get shelf_life() {
    return this.props.shelf_life
  }

  get amount() {
    return this.props.amount
  }

  constructor(props: MaterialProps) {
    this.props = props
  }
}
