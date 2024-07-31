import React from 'react'

const CreateProposals = () => {
  return (
    <main className=' flex flex-col w-full items-center justify-evenly h-screen'>
        <div className='text-center'>
        <h2 className='text-2xl font-bold text-[#333534]'>Create, Upload Proposals</h2>
        <span className='text-sm'>Enter your organization/Individual details</span>
        </div>
        <article className='flex flex-row  gap-x-4 h-10 border-b text-[#3E4456] '>
            <div className='border-b-2 border-[#266DD3] flex items-center font-bold'>Details</div>
            <div className=' flex items-center font-bold'>Additional</div>
            <div className=' flex items-center font-bold'>Schedule-Coming soon</div>
        </article>
        <section className='flex w-full justify-center text-xs'>
            <form className='flex flex-col justify-evenly gap-y-5 w-[70%] '>
                <div className='flex flex-col '>
                    <label className='text-sm'>Organization name</label>
                    <input className='border'/>
                </div>
               <div className='flex flex-col '>
                    <label>Proposal Title</label>
                    <input className='border'/>
                </div>
               <div className='flex flex-col '>
                    <label>Proposal Description</label>
                    <input className='border'/>
                </div>
                <div className='flex flex-col '>
                    <label>Category/Ecosystem</label>
                    <input className='border'/>
                </div>
                <div className='flex flex-col '>
                    <label>Tags</label>
                    <input className='border'/>
                </div>
                <button className='bg-[#266DD3] border text-white'>Next</button>
            </form>
        </section>
    </main>
  )
}

export default CreateProposals