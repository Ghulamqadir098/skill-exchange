import React from 'react'

function PreLoader() {
  return (
    <>
    
    {/* <!--====== Start Preloader ======--> */}
    <div className="preloader">
        <div className="lds-ellipsis">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    {/* <!--====== End Preloader ======--> */}
    
    </>
  )
}

export default PreLoader