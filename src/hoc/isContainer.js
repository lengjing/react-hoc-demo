import React from 'react'
import { compose } from '../utils'
import hasData from './hasData'
import hasError from './hasError'
import hasDefault from './hasDefault'
import hasLoader from './hasLoader'

const isContainer = ({ data, Error, DefaultComponent }) => WrappedComponent => {
  const IsContainer = props => <WrappedComponent {...props} />

  return compose(hasData(data), hasError(Error), hasLoader, hasDefault(DefaultComponent))(IsContainer)
}

export default isContainer