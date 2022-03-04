import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";


const platforms = [
  {
    name: 'instagram',
    icon: 'https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg',
    url: 'https://instagram.com/hash_define?utm_medium=copy_link',
  },
  {
    name: 'discord',
    icon: 'https://cdn.cdnlogo.com/logos/d/43/discord.svg',
    url: 'https://discord.gg/Zd766Gn4aa',
  },
  {
    name: 'github',
    icon: 'https://raw.githubusercontent.com/rdimascio/icons/932c4cf6c9e2031abeca1c164baa0f76785c16fe/icons/light/github.svg',
    url: 'https://github.com/hash-define-organization',
  },
  {
    name: 'youtube',
    icon: 'https://cdn.cdnlogo.com/logos/y/57/youtube-icon.svg',
    url: 'https://www.youtube.com/channel/UCDqf3_N1l7s0dVAVycN8FQA',
  },
  {
    name: 'linkedin',
    icon: 'https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg',
    url: 'https://www.linkedin.com/company/defineweare/mycompany/',
  },
  {
    name: 'mail',
    icon: 'https://cdn.cdnlogo.com/logos/o/14/official-gmail-icon-2020.svg',
    url: 'mailto:',
  },
  {
    name: 'whatsapp',
    icon: 'https://cdn.cdnlogo.com/logos/w/29/whatsapp-icon.svg',
    url: 'https://discord.gg/Zd766Gn4aa',
  },
];

export function SocialMedia ()
{
  return (
    <div className='social-media'>
      <div className='icons'>
        { platforms.map( ( platform ) =>
        {
          return (
            <a href={ platform.url } target='_blank'>
              <img className="icon" title={ platform.name } src={ platform.icon } alt={ platform.name } />
            </a>
          );
        } ) }
      </div>
      <h1>Connect with Us</h1>
    </div> );
}
