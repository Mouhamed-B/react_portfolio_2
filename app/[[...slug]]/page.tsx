'use client'
import React from 'react'

import dynamic from 'next/dynamic'
import '../../src/index.css'
 
const App = dynamic(() => import('../../src/App'))
 
export default function Page() {
  return <App />
}