import branch from './branch'

const hasDefault = DefaultComponent => WrappedComponent =>
  props => branch(props.useDefault, DefaultComponent, WrappedComponent)(props)

export default hasDefault
