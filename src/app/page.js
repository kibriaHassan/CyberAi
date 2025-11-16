import Home from '@/components/Home';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full z-0'>
      </div>
      <div className='container border border-r border-l-amber-800 border-r-amber-300 border-t-transparent border-b-transparent min-h-screen mx-auto'>
        <Navbar />
        <Home />
        <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full z-0'>
        </div>
      </div>
    </>
  )
}

export default Page;
