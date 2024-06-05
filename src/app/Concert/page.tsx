"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Concert = dynamic(() => import('@/components/Concert'), {
  ssr: false
}); 


export default function Home() {
  return (
      <>
        <Suspense>
          <Concert/>
        </Suspense>
      </>
  )
}
