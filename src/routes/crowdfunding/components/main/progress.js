import React from 'react'

const Main = props => (
  (
    <div style={{ background: '#eee' }}>
      <div style={{ width: props.completed + '%', height: 20, background: '#aaa' }} />
    </div>
  )
)

export default Main
