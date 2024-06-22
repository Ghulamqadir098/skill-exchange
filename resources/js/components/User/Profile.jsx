import React from 'react'
import user_image from '../../assets/images/user.webp'
function Profile() {
  return (
    <>
    
    <div className='row align-items-center justify-content-center'>
<div className='col-6 py-3 d-flex flex-column justify-content-center align-items-center'style={{borderRadius:15+'px',backgroundColor:'gainsboro'}}>
<div className='w-75 my-2 h-75 border d-flex flex-column justify-content-center align-items-center' style={{borderRadius:15+'px',backgroundColor:'white'}}>
<img className='w-50 mt-1 h-50 border border-warning rounded-circle' src={user_image} alt="hello" />
<h3 className='my-2'>John Smith</h3>
<p className='my-1'>Full Stack Developer</p>
</div>
<div className='w-75 my-2 h-75 border d-flex flex-column justify-content-center align-items-center' style={{borderRadius:15+'px',backgroundColor:'white'}}>
<table class="table">
  <tbody>
    <tr>
      <th scope="row">Full Name</th>
      <td>Mark</td>
     

    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>Jacob</td>
  
    </tr>
    <tr>
      <th scope="row">User_Name</th>
      <td colspan="2">Larry the Bird</td>
    </tr>
  </tbody>
</table>




  
</div>




</div>
    </div>
    
    
    </>
  )
}

export default Profile