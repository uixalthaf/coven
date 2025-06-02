import React from 'react'
import AdminLeftBar from '../components/admin/AdminLeftBar'
import AdminMainBar from '../components/admin/AdminMainBar'
import AdminRightBar from '../components/admin/AdminRightBar'
AdminRightBar
function AdminPage() {
  return (
    <div className='admin-container flex'>
            <AdminLeftBar/>
            <AdminMainBar/>
            <AdminRightBar/>
            
    </div>

  )
}

export default AdminPage