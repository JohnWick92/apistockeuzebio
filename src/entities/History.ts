export interface HistoryProps {
  code_pk: string
  code_material: string
  description: string
  batch: string
  shelf_life: Date
  quantity_used: number
  date_of_use: Date
}

export class History {
  private props: HistoryProps

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

  get quantity_used() {
    return this.props.quantity_used
  }

  get date_of_use() {
    return this.props.date_of_use
  }

  constructor(props: HistoryProps) {
    this.props = props

    if (this.shelf_life < this.date_of_use)
      throw new Error('The product runned out shelf life')
  }
}
