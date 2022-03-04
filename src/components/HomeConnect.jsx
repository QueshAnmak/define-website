import '../styles/home-connect.scss';
import { MailingList } from './MailingList';
import { SocialMedia } from './SocialMedia';

export function HomeConnect ()
{
  return (
    <div className='home-connect'>
      <div className='up'>
        <MailingList></MailingList>
      </div>
      <div className='down'>
        <SocialMedia></SocialMedia>
      </div>
    </div> );
}
