import React, {useEffect, useState} from 'react'
import useWalletConnect from './walletconnect'
import { useWeb3ModalAccount } from '@web3modal/ethers/react' 
import { CiWallet } from "react-icons/ci";
import {GoDotFill} from 'react-icons/go'
import proposalImg from './assets/proposal_img1.png'
import Navbar from './header';

const Main = () => {
  
   
  return (
    <div className='h-fit flex items-center justify-center  flex-col w-full px-4 py-2 '>
        <Navbar/>
        <h2 className='text-2xl lg:text-4xl mt-4'>
        Ecosystem Proposals
        </h2>
        <span className='text-sm'>Vote with ease, Secure platform. Make a difference!</span>

        <section className='w-[70%] lg:w-[60%] mt-4  flex flex-col gap-y-4'>
           
           
            <article className=' rounded-sm flex flex-col lg:flex-row justify-between border w-full h-64 bg-white shadow-lg'>
              <div className='h-[30%] lg:h-full  lg:order-2 flex items-center  mx-auto'>
                <img className='h-full' src={proposalImg}/>
              </div>
              <div className='border lg:h-full  h-[70%] lg:w-[70%] flex justify-evenly flex-col px-2'>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Active</span>
                </div>
                <h2 className='text-lg font-bold lg:text-2xl'>Garden Project</h2>
                <p className='text-sm lg:text-base'>We aim to transform an unused plot of land into a thriving <br/> community. This project will...</p>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Eth</span>
                </div>
                <div className='flex justify-center gap-x-2 lg:w-[60%] lg:h-12'>
                <button className=' w-1/2 bg-[#266DD3] text-white rounded-md'>Vote</button>
                <button className='rounded-md  border-2 w-1/2'>View details</button>
                </div>

              </div>

            </article>
            <article className=' rounded-sm flex flex-col lg:flex-row justify-between border w-full h-64 bg-white shadow-lg'>
              <div className='h-[30%] lg:h-full  lg:order-2 flex items-center  mx-auto'>
                <img className='h-full' src={proposalImg}/>
              </div>
              <div className='border lg:h-full  h-[70%] lg:w-[70%] flex justify-evenly flex-col px-2'>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Active</span>
                </div>
                <h2 className='text-lg font-bold lg:text-2xl'>Garden Project</h2>
                <p className='text-sm lg:text-base'>We aim to transform an unused plot of land into a thriving <br/> community. This project will...</p>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Eth</span>
                </div>
                <div className='flex justify-center gap-x-2 lg:w-[60%] lg:h-12'>
                <button className=' w-1/2 bg-[#266DD3] text-white rounded-md'>Vote</button>
                <button className='rounded-md  border-2 w-1/2'>View details</button>
                </div>

              </div>

            </article>
            <article className=' rounded-sm flex flex-col lg:flex-row justify-between border w-full h-64 bg-white shadow-lg'>
              <div className='h-[30%] lg:h-full  lg:order-2 flex items-center  mx-auto'>
                <img className='h-full' src={proposalImg}/>
              </div>
              <div className='border lg:h-full  h-[70%] lg:w-[70%] flex justify-evenly flex-col px-2'>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Active</span>
                </div>
                <h2 className='text-lg font-bold lg:text-2xl'>Garden Project</h2>
                <p className='text-sm lg:text-base'>We aim to transform an unused plot of land into a thriving <br/> community. This project will...</p>
                <div className='flex flex-row items-center text-xs text-[#B08EA2]'>
                <GoDotFill/>
                <span className='text-xs '>Eth</span>
                </div>
                <div className='flex justify-center gap-x-2 lg:w-[60%] lg:h-12'>
                <button className=' w-1/2 bg-[#266DD3] text-white rounded-md'>Vote</button>
                <button className='rounded-md  border-2 w-1/2'>View details</button>
                </div>

              </div>

            </article>
           
         
            <h2 className='text-[#266DD3] text-center font-bold'>See More</h2>
        </section>

    </div>
  )
}

export default Main