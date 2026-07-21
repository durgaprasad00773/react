import React from 'react'
import { MoveUpRight } from 'lucide-react'
const Page1left = () => {
  return (
    <div className="w-1/4 bg-gray-300 flex flex-col justify-between p-4 rounded-lg">
        <div>
            <h3 className="text-3xl font-bold mb-4 leading-[-1.5]">
                Prospective Customer Segmentation
            </h3>
            <p className="text-lg leading-5">
                Identify and analyze potential customers based on demographics, behavior, and preferences.
            </p>
        </div>
        <div className="text-3xl">
            <MoveUpRight />
        </div>
    </div>
  )
}

export default Page1left