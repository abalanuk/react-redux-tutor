import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({name, label, value, options, defaultOption, error, onChange}) => {
  let wrapperClass = 'form-group'
  if (error && error.length > 0) {
    wrapperClass += ' has-error'
  }
  return (
  <div className={wrapperClass}>
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value=''>{defaultOption}</option>
        {options.map((option)=>{
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
  )
}

SelectInput.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default SelectInput
