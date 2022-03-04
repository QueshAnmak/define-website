import '../styles/landing.scss';
import { DeviceCarousel } from './DeviceCarousel.jsx';
import { HomeStats } from './HomeStats';


export function HomeLanding ()
{
  return <div className='landing'>
    <div className='left'>
      <div className='info'></div>
      <h1 className='text-heading'>#define yourself</h1>
      <p className='text-para'>#define represents individuals who believe in the power of learning by doing and the importance of an active Coding Community.</p>
      <HomeStats/>
    </div>
    <div className='right'>
    </div>
  </div>;
}


