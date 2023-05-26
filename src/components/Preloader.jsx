import React from 'react'

const Preloader = () => {
  return (
    <>
      <h2 className='progress__title'>Loading...</h2>
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    </>
  )
}

export default Preloader
