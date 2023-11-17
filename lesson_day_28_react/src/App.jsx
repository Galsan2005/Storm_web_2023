// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Image from './components/Image'
import HeaderLine from './components/HeaderLine'
import ProfileInfo from './components/ProfileInfo'

function App() {
  return (
    <div className="font-sans flex justify-center items-center h-screen m-0 bg-white-200">
      <div className='bg-white shadow-lg w-21 p-10 text-center rounded-10'>
        <Image />
        <HeaderLine />
        <ProfileInfo />
      </div>
    </div>
  )
}

export default App;
