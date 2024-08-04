import React, {useEffect, useState} from 'react'
import useWalletConnect from './walletconnect'
import { useWeb3ModalAccount } from '@web3modal/ethers/react' 
import { CiWallet } from "react-icons/ci";

const Navbar = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const [walletaAddress, setWalletAddress] = useState('')

    useEffect(()=>{
      isConnected ? setWalletAddress(()=>{
        const prefix = address.slice(0, 6);
        const suffix = address.slice(-4);
        const formattedAddress = `${prefix}...${suffix}`;
        return formattedAddress
      }): setWalletAddress('')
    }, [isConnected])
    const [profileView, setProfileView] = useState(false)

    const handleProfileView = ()=>{
        setProfileView(!profileView)
    }

    const {connectWallet, closeWallet} = useWalletConnect()
  return (
    <div className='flex fixed bg-white top-0 w-full h-6 px-2'>
    <div className='ml-auto mt-2'>
  {walletaAddress !== '' ? <button onClick={handleProfileView} className='w-32 rounded-md text-sm  shadow-md border'>{walletaAddress} </button> : <div onClick={handleProfileView} className='border-2 z-20 rounded-sm w-10 flex justify-end'> <CiWallet className='text-[#266DD3] font-bold'/> </div>}
  </div> 
  <article className={`absolute z-10 shadow-md flex flex-col text-xs ${profileView ? "h-52  visible " : 'h-0 hidden' }   lg:w-44 rounded-md right-0 mt-8 mr-2 border bg-white`}>
  <div className='border flex items-center h-[20%] justify-center gap-x-2 row-span-2 w-full'><span className='h-8 border rounded-full w-8'></span>
    <button onClick={connectWallet} className='bg-[#266DD3] h-8 rounded-md w-24 text-white text-xs'>Connect wallet</button>
    </div>
 
    <div className='flex flex-col justify-evenly h-[80%] borde'>

    <div className='border '><span>Company Profile</span>
    <span>Dashboard</span>
    </div>
    <div className='border'><span>Notifications</span>
    
    </div>
    <div className='border'><span>Notifications</span>
    
    </div>
    </div>

  </article>
    </div>
  )
}

export default Navbar