import React, { PureComponent } from 'react'

class MyComponent extends PureComponent {
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps(nextProps) {}
  UNSAFE_componentWillUpdate() {}

  render() {
    return <div>my component</div>
  }
}

export default MyComponent
