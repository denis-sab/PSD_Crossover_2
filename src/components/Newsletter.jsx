import instagram from "../assets/instagram.png"

function Newsletter() {
  return (
    <div  className='bg-stone-100  h-60 flex flex-col mx-5  items-center justify-center '  >
      
      <p className='font-semibold text-3xl mb-10'>Sign up for our newsletter !</p>

      <div>
        <label htmlFor="" className="border-b-4 border-neutral-500">
        <input className="bg-transparent w-80 text-l mt-10 " type="text" placeholder='Enter a valid email address  '/>
        <button className="ml-5"><img src={instagram} alt="" /></button>
        </label>
   
      </div>

    </div>
  )
}

export default Newsletter