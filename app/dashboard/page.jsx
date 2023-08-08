'use client';

// import { Tabs } from 'flowbite-react';
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
// import { MdDashboard } from 'react-icons/md';

import OrderTable from '@components/OrderTable';
import { useSession } from "next-auth/react"
import UserOrderTable from '@components/UserOrderTable';



function page() {
  const { data: session } = useSession()
  const isAdmin = session?.user.role === 'admin';

  if (session) {
    return (
      <>
      

        <div className='tabs-wrapper '>
          {/* <Tabs.Group aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item
            className='focus:none'
            active
            icon={HiClipboardList}
            title="Profile"
          > */}
          {isAdmin ? (
            console.log('admin'),
            <OrderTable />
          ) :
            (

              console.log('user'),
              <UserOrderTable />
            )
          }

          {/* </Tabs.Item>
          <Tabs.Item icon={MdDashboard} title="Dashboard" >
            <p>
              This is the dashboard
            </p>
          </Tabs.Item>
        </Tabs.Group> */}
        </div>
      </>

    )
  }
  //IF NOT LOGGED IN
  return (
    <div className='text-center mt-10'>
      <h2 className='text-5xl'>Access Denied</h2>
      <p className='mt-10'>Please login for dashboard</p>
    </div>
  )
}

export default page