import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({columns}) => {
  return (
    <tr>{
      columns.map(column =>
        {
          return <th key={column.field}>{column.title}</th>
        })
      }
    </tr>
  )
};

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired
};

TableHeader.defaultProps = {
  columns: []
};

export default TableHeader
