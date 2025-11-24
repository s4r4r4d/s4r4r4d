'use client';
import Lottie from 'lottie-react';
import worldMap from '@/../public/lottie/mapa.json';

export default function WorldMapAnimation() {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <Lottie
        animationData={worldMap}
        loop={true}
        className="w-[500px] sm:w-[700px] h-auto"
      />
    </div>
  );
}
