import * as React from "react"
import Image from 'next/image'
import team from '../static/images/1.png'
import duet from '../static/images/2.png'



export default function CompanyCard(props) {
    const {companyName, tagLine, logo, totalProfiles, availablePositions, centerImage} = props;

  return (
    <div onClick={() => console.log(companyName)} className='border box-border w-4/5 flex justify-evenly items-center flex-col border-slate-950 rounded-xl h-[40vh] m-auto hover:h-[45vh] hover:w-[85%] transition-all ' >   
            <p className=' text-base font-semibold'>{companyName}</p>
            <Image src={centerImage === "team" ?team:duet} height={200} width={200} alt='avatar'/>
            <p className='text-sm'>{tagLine}</p>
            <div className='h-1/4 w-full flex'>
                <div className='h-full w-1/5  flex items-center justify-center pl-2'>
                    <Image src={logo} height={50} width={50} alt='companylogo'/>
                </div>
                <div className='h-full w-4/5  flex justify-evenly flex-col items-start pl-2 text-xs'>
                    <p> <span className='font-semibold'>Company Name :</span> {companyName}</p>
                    <p> <span className='font-semibold'>Total Profiles :</span> {totalProfiles}</p>
                    <p> <span className='font-semibold'>Available Positions :</span> {availablePositions}</p>
                </div>
            </div>
        </div>
  )
}
