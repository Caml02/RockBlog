"use client"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Article = dynamic(() => import('@/components/Article'), {
  ssr: false
}); 


export default function Home() {
  return (
      <>
        <Suspense>
          <Article/>
        </Suspense>
      </>
  )
}
