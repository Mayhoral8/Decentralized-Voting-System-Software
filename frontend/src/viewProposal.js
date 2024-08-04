import React from 'react'
import Navbar from './header'
import {GoDotFill} from 'react-icons/go'
import proposalImg from './assets/proposal_img1.png'

const ViewProposal = () => {
  return (
    <main className=''>
   <Navbar/>
   <section className='mt-10  flex justify-center w-full'>
    <article className='px-4 lg:px-40 lg:gap-x-4  lg:flex lg:flex-row' >
        <img src={proposalImg} className='mx-auto'/>
        <div>

        <div className='flex flex-row items-center gap-y-2  text-xs text-[#B08EA2]'>
        <h1 className='text-gray-900'>Garden Project</h1>
        <div></div>
          
                </div>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Active</span>
                </div>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Active</span>
                </div>
                <h2 className='text-xl font-bold'>high performance DEX on Solana</h2>
                <p className='text-xs lg:text-base'>This proposal suggests the development of a decentralized exchange (DEX) on Solana, taking advantage of its high throughput and low transactional fees, The platform will offer a seamless and cost effective trading experience, with support for various digital assets.</p>
                </div>

    </article>
   </section>
   <section className='border-t w-ful mt-10 lg:px-56'>
    <article className='grid grid-cols-3 border rounded-md mt-4 lg:h-8 justify-around mx-auto items-center text-xs text-center w-[80%]'>
        <div className=''>Vote</div>
        <div className='border-r border-l'>Active Proposals</div>
        <div className=''>Expired Proposals</div>
    </article>
    <article className='mt-4 flex flex-col gap-y-4'>
        <div className='h-8 w-[90%] bg-[#F9FAFB] mx-auto  flex flex-row px-4 justify-between items-center'>
        <span>Yes</span>
        <span>1k</span>
        </div>
        <div className='h-8 w-[90%] bg-[#F9FAFB] mx-auto  flex flex-row px-4 justify-between items-center'>
        <span>Yes</span>
        <span>1k</span>
        </div>
        <button className='w-[90%] h-8 bg-[#266DD3] text-white mx-auto rounded-sm'>Vote</button>


     

    </article>

   </section>
    </main>
  )
}

export default ViewProposal


