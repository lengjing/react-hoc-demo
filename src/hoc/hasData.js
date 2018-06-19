import React from 'react'
import request from '../utils/request'

const hasData = ({ url, params, loading = null, loadingMessage }) => WrappedComponent => {
  class HasData extends React.Component {
    state = {
      url,
      data: [],
      hasError: false,
      error: {
        title: '请求失败',
        message: '网络请求失败',
      },
      useDefault: false,
      loading: true,
      loadingMessage,
    };

    componentDidMount() {
      request(url)
        .then(({ data, params }) => {
          this.setState({
            data,
            loading: false,
            hasError: false,
            useDefault: data.length === 0,
          });
        })
        .catch(error => {
          this.setState({
            hasError: true,
            loading: false,
          })
        })
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

  return HasData
};

export default hasData
