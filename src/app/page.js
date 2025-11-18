import Banner from '@/components/Banner';
import Faq from '@/components/Faq';
import GreetingPart from '@/components/GreetingPart';
import NeonDreams from '@/components/NeonDreams';
import UniversePart from '@/components/UniversePart';
import YourProtal from '@/components/YourProtal';

const Home = () => {
  return (
    <>
      <Banner />
      <NeonDreams />
      <GreetingPart />
      <UniversePart />
      <YourProtal />
      <Faq />
    </>
  )
}

export default Home;