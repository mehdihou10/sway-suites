import React from 'react'
import {features} from '../data/features';

const ChooseUs = () => {
  return (
    <div className='mt-[70px] py-[70px] px-[15px] md:px-[30px] bg-light'>
      <h3 className="sub-title text-[30px] after:w-[100px] text-center">Why do you choose us</h3>

      <div className="features grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">

        {
            features.map((feature,index)=>{

                const Icon = feature.icon;

                return(

                        <div data-aos="fade-up" data-aos-duration="1000" key={index} className='shadow-gray bg-white text-center
                         px-[15px] py-[20px] rounded-lg min-h-[300px]'>

                            <Icon className='mx-auto text-bold text-[50px]' /> 
                            <h1 className='font-bold font-rokkit text-[30px] text-black my-[20px]'>{feature.title}</h1>
                            <p className='text-gray-500 leading-[1.7]'>{feature.description}</p>
                            
                        </div>
                    )
                
            })
        }

      </div>
    </div>
  )
}

export default ChooseUs
