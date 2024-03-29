import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <button className='font-bold uppercase pt-2'>Solutions</button>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row mx-2'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-gray-500'>
        <p className='text-center py-4 text-fuchsia-50'>2022 Workflow, LLC. All rights reserved</p>
       
        <div className='flex justify-evenly space-x-6 sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className=' bg-blue-900 w-10 h-10 rounded-full ring-cyan-900 m-1 p-.5 border-blue-500 hover:bg-indigo-100' />
            <FaInstagram className=' bg-orange-800 w-10 h-10 rounded-full ring-cyan-900 m-1 p-.5 border-blue-500' />
            <FaTwitter className=' bg-cyan-500-900 w-10 h-10 rounded-full ring-cyan-900 m-1 p-.5 border-blue-500'/>
            <FaTwitch className=' bg-cyan-600-900 w-10 h-10 rounded-full ring-cyan-900 m-1 p-.5 border-blue-500'/>
            <FaGithub className=' bg-gray-900-900 w-10 h-10 rounded-full ring-cyan-900 m-1 p-.5 border-blue-500' />
        </div>
        </div>
    </div>
  )
}

export default Footer