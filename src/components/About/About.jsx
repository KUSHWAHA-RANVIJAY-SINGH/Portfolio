import React from 'react'
import { FaGraduationCap, FaCode, FaBriefcase, FaBullseye } from 'react-icons/fa'

function About() {
  return (
    <div id='About' name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
          About Me
        </h1>
        <div className='w-24 h-1 bg-red-500 mx-auto mb-8'></div>
        <p className='text-xl md:text-2xl text-gray-800 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed'>
          Hello, I'm Ranvijay, a passionate Web developer with a keen eye for MERN Stack. 
          With a background in IT, I strive to create impactful and visually stunning Software 
          solutions that leave a lasting impression.
        </p>
      </div>

      {/* Content Grid */}
      <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
        
        {/* Education & Training */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4'>
              <FaGraduationCap className='text-red-500 dark:text-red-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Education & Training
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            I have Pursuing my B.Tech in Computer Science from Marwadi University, Gujrat. 
            I have also completed MERN Stack Development.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4'>
              <FaCode className='text-red-500 dark:text-red-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Skills & Expertise
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            I have expertise in MERN Stack Development, MongoDB, Express.js, React.js, Node.js, 
            JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Git, GitHub, Netlify, Firebase, 
            RESTful API, Postman, DSA in java and many more.
          </p>
        </div>

        {/* Professional Experience */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4'>
              <FaBriefcase className='text-red-500 dark:text-red-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Professional Experience
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            I have worked as a Web Developer. I have also worked as a Networking Intern 
            at The Cisco Academy.
          </p>
        </div>

        {/* Mission Statement */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4'>
              <FaBullseye className='text-red-500 dark:text-red-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Mission Statement
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            My mission is to provide the best Software solutions to my clients and to help 
            them achieve their goals.
          </p>
        </div>

      </div>

      {/* Achievements Section (Commented out but formatted) */}
      {/* 
      <div className='mt-12 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700'>
        <div className='flex items-center mb-6'>
          <div className='bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4'>
            <FaTrophy className='text-red-500 dark:text-red-400 text-2xl' />
          </div>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Achievements & Awards
          </h2>
        </div>
        <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
          I have received the Best Intern Award at Kg coding. I have also received the 
          Best Intern Award at The Sparks Foundation.
        </p>
      </div>
      */}
    </div>
  )
}

export default About