const Container = () => {
  return (
    <div className='flex mt-12 m-6 p-6'>
      <div className='w-2/3 flex-col m-6 p-6 gap-4 h-[600px]'>
        <div className='flex items-center flex-col mt-24 gap-8'>
        <h3 className='text-xl text-white font-serif'>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className='text-9xl ml-8 text-white font-serif'>SPACE</h1>
        <p className='text-lg tracking-widest mt-4 ml-8 text-white'>Let's face it; if you want to go to space, you might as well <br />
          qenuinely go to outer space and not,hover kind of on the <br />
          edge of it.Well sit back, and relax because we'll give you <br />
          a trully out of this world experience!
        </p>
        </div>
     
      </div>
      <div className='w-1/3 m-4 p-4 flex items-center justify-center'>
        <div className="bg-white w-72 h-72 flex items-center justify-center rounded-full">
          <span className="font bold text-2xl">EXPLORE</span>
        </div>

      </div>
    </div>

  )
}

export default Container