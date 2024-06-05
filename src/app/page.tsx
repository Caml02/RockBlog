"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LandingPage = dynamic(() => import('@/components/LandingPage/LandingPage'), {
  ssr: false
}); 


export default function Home() {
  return (
      <>
        <Suspense>
          <LandingPage/>
        </Suspense>
      </>
  )
}
