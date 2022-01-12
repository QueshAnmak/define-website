import React from 'react';

import '../styles/device-carousel.scss';

import mobile from '../assets/landing-images/mobile-outline.svg';
import desktop from '../assets/landing-images/desktop-outline.svg';
import laptop from '../assets/landing-images/laptop-outline.svg';
import define_logo_solid from '../assets/define-logo-solid.svg';



const devices = [
  {
    deviceName: "desktop",
    deviceImg: desktop
  },
  {
    deviceName: "mobile",
    deviceImg: mobile
  },
  {
    deviceName: "laptop",
    deviceImg: laptop
  }
];

export class DeviceCarousel extends React.Component
{

  constructor ( props )
  {
    super( props );
    this.state = {
      idx: 0
    };
    this.changeIdx = this.changeIdx.bind( this );
  }

  changeIdx ()
  {
    if ( this.state.idx < devices.length - 1 )
    {
      // setIdx( idx + 1 );
      this.setState( prevState => ( { idx: prevState.idx + 1 } ) );
    }

    else
    {
      this.setState( { idx: 0 } );
    }
  }

  componentDidMount ()
  {
    setInterval( this.changeIdx, 2400 );
  }

  // Device ( { deviceName, deviceImg } )
  // {
  //   return (
  //     <img
  //       className={
  //         `
  //       devices
  //       ${ deviceName }
  //       ${ () => { return deviceName == devices[ this.state.idx ] ? 'show' : 'hide'; } } 
  //       `
  //       }
  //       src={ deviceImg }
  //       alt=""
  //     /> );
  // }

  render ()
  {
    return (
      <div className='device-carousel'>
        <div className='device-container'>
        <img
          className={ 'device desktop ' + ( devices[ this.state.idx ].deviceName == 'desktop' ? 'show' : 'show' ) }
          src={ desktop }
          alt=""
          />
        </div>
        {/* <div className='device-container'> */}

        {/* <img
          className={ 'device mobile ' + ( devices[ this.state.idx ].deviceName == 'mobile' ? 'show' : 'hide' ) }
          src={ mobile }
          alt=""
        />

        <img
          className={ 'device laptop ' + ( devices[ this.state.idx ].deviceName == 'laptop' ? 'show' : 'hide' ) }
          src={ laptop }
          alt=""
        /> */}
        {/* {
          devices.map( ( { deviceName, deviceImg } ) =>
          {
            return (
              this.Device( { deviceName, deviceImg } )
            );
          } )
        } */}
        <div
          className={ `define-logo ${ this.state.idx }` }
        >
          <img
            className='solid'
            src={ define_logo_solid }
            alt='define logo' />
        </div>
      </div>
    );
  }
}
