import React from 'react'

function SearchForm() {
  return (
    <>
    
    {/* <!--====== Search From ======--> */}
    <div className="modal fade show" id="search-modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <form>
                    <div className="form_group">
                        <input type="text" className="form_control" placeholder="Search here..." />
                        <button className="search_btn"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <!--====== Search From ======--> */}

    {/* <!--====== back-to-top ======--> */}
    <span className="back-to-top"><i className="far fa-chevron-up"></i></span>
    
    
    
    
    
    </>
  )
}

export default SearchForm