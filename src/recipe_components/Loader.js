import React from 'react'

const Loader = () => {
  const load = {
    minHeight: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div className='loader-container' style={load}>
      <div className="spinner-grow" style={{width:300, height:300 }} role="status">
        <span className="visually-hidden">Loading....</span>

      </div>
    </div>
  )
}

export default Loader
