import React from 'react'
import Page1left from './Page1left'
import Page2right from './Page2right'

const Page1box = () => {
  return (
    <div className="py-3 px-12 flex h-5/6 w-5/6 mx-auto my-auto rounded-lg gap-8">
        <Page1left />
        <Page2right />
    </div>
  )
}

export default Page1box