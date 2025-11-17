import Banner from '@/components/Banner';
import Faq from '@/components/Faq';
import GreetingPart from '@/components/GreetingPart';
import Navbar from '@/components/Navbar';
import NeonDreams from '@/components/NeonDreams';
import UniversePart from '@/components/UniversePart';
import YourProtal from '@/components/YourProtal';

const Home = () => {
  return (
    <>
      {
        /* <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full z-0'>
        </div> */
      }
      <div className='container border border-r border-l-amber-800 border-r-amber-300 border-t-transparent border-b-transparent min-h-screen mx-auto'>
        {/* <Navbar /> */}
        <Banner />
        <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px absolute top-40 left-0 w-full z-0'>
        </div>

        {
          /* <div className='bg-linear-to-r from-orange-800 to-orange-300 h-px  w-full z-0'>
          </div> */
        }

        <NeonDreams />
        <GreetingPart />
        <UniversePart />
        <YourProtal />
        <Faq />
      </div>
    </>
  )
}

export default Home;
