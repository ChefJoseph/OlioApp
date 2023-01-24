import React from 'react'
import learn from '../../assets/learn.png'

function LearnOliveOil() {
  return (
    <div className="container py-16 mx-auto " >
        <h2 className="text-2xl font-medium text-gray-700 mb-6">
            Learn About Olive Oil
        </h2>
        {/* <div className="grid grid-cols-3 gap-1 "> */}
        <div >
        <img src={learn} alt={"#"}className="w-100 mx-auto"/>
        </div>
        
    </div>
  )
}

export default LearnOliveOil