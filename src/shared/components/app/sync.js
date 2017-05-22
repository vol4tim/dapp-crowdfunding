import React from 'react'

const Sync = (props) => {
  const status = props.status
  if (status === false) {
    return <div />
  }
  return <div className="statusbar"><span>{status.currentBlock} / {status.highestBlock} syncing </span></div>
}

export default Sync
