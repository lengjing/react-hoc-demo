import React from 'react'

const isList = type => WrappedComponent => {
  const IsList = ({ data = [] }) => {
    return (
      <div className={type}>
        {data.map(item => <WrappedComponent {...item} key={item.id} />)}
      </div>
    );
  }

  return IsList
};

export default isList