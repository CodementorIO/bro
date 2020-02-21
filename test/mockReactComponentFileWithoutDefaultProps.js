import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ variant, large }) => (
  <div>
    <div>my component, variant: {variant}</div>
    {large && <div>is large</div>}
  </div>
)

MyComponent.propTypes = {
  variant: PropTypes.string.isRequired,
  large: PropTypes.bool,
}

export default MyComponent
