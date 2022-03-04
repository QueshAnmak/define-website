import '../styles/home-stats.scss';
import CountUp from 'react-countup';


const stats = [ '800', '400', '200', '30' ];

export function HomeStats ()
{
  return (
    <div className='home-stats'>
      {
        stats.map( ( stat, index ) =>
        {
          return <CountUp start={ 1 } end={ stat } className='stat' />
        })
      }
    </div>
  );
}

