import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayuot';
import { lazy, Suspense } from 'react';
import LandingPage from '@/pages/LandingPage';
const Home =lazy(()=>import('@/pages/Home'));
const More=lazy(()=>import("@/pages/More"));
const SinglProduct=lazy(()=>import('@/pages/SingleProduct'))
const Services=lazy(()=>import('@/pages/Services'))
const TestingUploadImage =lazy(()=>import('@/pages/TestingUploadImage'));
const Discreption=lazy(()=>import('@/pages/Discreption'));
const Shope =lazy(()=>import("@/pages/Shope"))

const router=createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
     {
        index: true,
        element:
        <Suspense fallback={<h1>loading ....</h1>}>
            <LandingPage />
        </Suspense>
    },
     {
       path:"/home",
        element:
        <Suspense fallback={<h1>loading ....</h1>}>
            <Home />
        </Suspense>
    },
    {
      path:"/more",
      element:
      <Suspense fallback ={<h1>loading....</h1>}>
        <More/>
      </Suspense>
    },
    {
      path:'/singleproduct',
      element:<SinglProduct/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/uploadimage',
      element:<TestingUploadImage/>
    },
    {
      path:"discreption/:id",
      element:<Discreption/>
    },
    {
      path:"shope",
      element:<Shope/>
    },
    ]
}
])
function AppRouter() {
  return (
      <RouterProvider router={router} />)
}

export default AppRouter