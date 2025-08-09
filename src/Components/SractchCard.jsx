
import React, { useEffect } from 'react';
import ScratchCard from 'scratchcard-js';
import { SCRATCH_TYPE } from 'scratchcard-js';
 import image from '../pictures/gray.png'
 import AboutImg from '../pictures/about-img.jpg'

const SractchCard = () => {

 useEffect(() => {
    const scContainer = document.getElementById('scratch-container');

    if (!scContainer) return;

    const sc = new ScratchCard('#scratch-container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,
      containerHeight: 300,
      imageForwardSrc: image,
      imageBackgroundSrc: AboutImg,
      clearZoneRadius: 30,
      percentToFinish: 50,
      callback: () => alert('🎉 You revealed the reward!'),
    });

    sc.init().catch(console.error);
  }, []);
 

  return (

   <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        id="scratch-container"
        className="border border-gray-400"
        style={{ width: '300px', height: '300px' }}
      ></div>
    </div>
  )
}

export default SractchCard