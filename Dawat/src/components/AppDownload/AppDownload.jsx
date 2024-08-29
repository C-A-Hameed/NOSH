import React from 'react';
import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/>DAWAT. APP</p>
      <div className="app-download-platforms">
        <img src={assets.playstore} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
