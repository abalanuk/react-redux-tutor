import React, {PropTypes} from 'react'

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
}

TableHeader.PropTypes = {
  columns: PropTypes.array.isRequired
}

TableHeader.DefaultProps = {
  columns: []
}

export default TableHeader