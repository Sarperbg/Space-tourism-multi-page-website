import AnsariLogo from '../assets/crew/image-anousheh-ansari.png'
const CrewComp = () => {
    return (
        <div className='flex w-full gap-4 '>
            <div className='flex justify-center items-center flex-col w-1/2'>
                <div>
                    <span className='flex w-full text-3xl text-gray-100 font-serif tracking-wider'>02 MEET YOUR CREW</span>

                </div>
                <div className='flex flex-col font-serif tracking-wide mt-36'>
                    <span className='text-4xl text-neutral-500'>FLIGHT ENGINEER</span>
                    <h1 className='text-6xl mt-4'>ANOUSHEH ANSARI</h1>
                    <div className='mt-16'>
                        <p className='text-lg'>Anousheh Ansari is an Iranian American engineer and co- <br />
                            founder of Prodea Systems. Ansari was the fourth self- <br />
                            funded space tourists, the first self-funded woman to fly <br />
                            to the ISS, and the first Iranian in space.

                        </p>
                    </div>
                </div>

            </div>


            <div className='flex justify-center items-center mt-40 flex-col w-1/2 '>
                <img src={AnsariLogo}  alt='' />
            </div>
        </div>
    )
}

export default CrewComp