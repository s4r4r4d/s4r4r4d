'use client';
import Lottie from 'lottie-react';
import lineAnimation from '@/../public/lottie/line.json';

export default function LineAnimation({ className }: { className?: string }) {
  return (
    <div className="flex justify-center items-center">
      <Lottie 
        animationData={lineAnimation} 
        loop={false}
        className={className}
      />
    </div>
  );
}
