import React from 'react'

const Main = props => (
  (
    <div className="progressbar m-b-35">
      <div className="progressbar-progress" style={{ width: props.completed + '%' }} />
    </div>
  )
)

export default Main
