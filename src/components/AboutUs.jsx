import React from 'react'

const AboutUs = () => {
  return (
    <div className='AboutUsSection flex flex-col  items-center justify-center w-full gap-10 p-20 '>
        <div className='AboutUs__top flex w-1/2 gap-10'>
        <div className='AboutUs__left'>
            <img className='w-full h-52' src="src/assets/image4.png"  alt="walking at the beach" />
            <div className='font-thin text-xs mt-5 mb-5'>LIFESTYLE</div>
            <h3 className='font-semibold text-2xl mb-5 tracking-tighter'>Top 10 songs for running</h3>
            <p className='tracking-tighter	'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos quae! Accusamus similique eos illum non ea voluptatibus rerum. Consequuntur, porro! Ad exercitationem culpa facilis inventore itaque asperiores ullam!</p>
        </div>
        <div className='AboutUs__right'>
            <img className='w-full h-52' src="src/assets/image5.png"  alt="walking at the beach" />
                <div className='font-thin text-xs mt-5 mb-5'>LIFESTYLE</div>
                <h3 className='font-semibold text-2xl mb-5 tracking-tighter'>Cold winter days</h3>
                <p className='tracking-tighter	'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos quae! Accusamus similique eos illum non ea voluptatibus rerum. Consequuntur, porro! Ad exercitationem culpa facilis inventore itaque asperiores ullam!</p>
        </div>
        </div>
        <button className='AboutUS__bottom border-2 border-gray-400 px-6 py-1.5 tracking-tigh  my-10'>Load More</button>
    </div>
  )
}

export default AboutUs