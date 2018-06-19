import branch from './branch'
import Error from '../components/Error'

const hasError = (ErrorComponent = Error) => WrappedComponent =>
  props => branch(props.hasError, ErrorComponent, WrappedComponent)(props)

export default hasError
