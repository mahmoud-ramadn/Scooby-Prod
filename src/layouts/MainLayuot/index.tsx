import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/Common/TheHeader';
import TheFooter from '@/components/Common/TheFooter';function MainLayout() {
  return (
    <div className='   min-h-screen'>
    <TheHeader/>
    <main className=' min-h-screen'>
      <Outlet/>
    </main>
   <TheFooter/>
    </div>
  )
}

export default MainLayout