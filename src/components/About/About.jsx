import React from 'react'
import { FaGraduationCap, FaBriefcase, FaBullseye } from 'react-icons/fa'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose,
  SiJavascript, SiTailwindcss, SiGit, SiGithub,
  SiPostman, SiVercel, SiNetlify, SiAmazons3,
  SiHtml5, SiCss3,
  SiDocker, SiRedis,
} from 'react-icons/si'
import { FaKey, FaServer } from 'react-icons/fa'

/* ─── Skill category definitions ─────────────────────────────── */
const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: 'text-sky-500',
    dot: 'bg-sky-400',
    skills: [
      { icon: <SiReact      className="text-sky-400"    />, label: 'React.js'        },
      { icon: <SiNextdotjs  className="text-gray-800 dark:text-white" />, label: 'Next.js'   },
      { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript (ES6+)' },
      { icon: <SiHtml5      className="text-orange-500" />, label: 'HTML5'            },
      { icon: <SiCss3       className="text-blue-500"   />, label: 'CSS3'             },
      { icon: <SiTailwindcss className="text-cyan-400"  />, label: 'Tailwind CSS'     },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: 'text-green-500',
    dot: 'bg-green-400',
    skills: [
      { icon: <SiNodedotjs className="text-green-500"             />, label: 'Node.js'           },
      { icon: <SiExpress   className="text-gray-500 dark:text-gray-300" />, label: 'Express.js' },
      { icon: <FaServer    className="text-indigo-400"            />, label: 'REST API Dev'      },
      { icon: <FaKey       className="text-yellow-500"            />, label: 'JWT Auth'          },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    accent: 'text-emerald-500',
    dot: 'bg-emerald-400',
    skills: [
      { icon: <SiMongodb  className="text-green-600"   />, label: 'MongoDB'  },
      { icon: <SiMongoose className="text-red-500"     />, label: 'Mongoose' },
      { icon: <SiRedis    className="text-red-600"     />, label: 'Redis'    },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Deployment',
    accent: 'text-orange-500',
    dot: 'bg-orange-400',
    skills: [
      { icon: <SiGit       className="text-orange-600"            />, label: 'Git'     },
      { icon: <SiGithub    className="text-gray-800 dark:text-white" />, label: 'GitHub' },
      { icon: <SiPostman   className="text-orange-500"            />, label: 'Postman' },
      { icon: <SiVercel    className="text-gray-800 dark:text-white" />, label: 'Vercel' },
      { icon: <SiNetlify   className="text-teal-500"              />, label: 'Netlify' },
      { icon: <SiAmazons3   className="text-yellow-500"            />, label: 'AWS S3'  },
      { icon: <SiDocker    className="text-sky-500"               />, label: 'Docker'  },
    ],
  },
]

/* ─── Single skill chip ───────────────────────────────────────── */
const SkillChip = ({ icon, label }) => (
  <div className="
    flex items-center gap-2
    bg-gray-50 dark:bg-slate-700/80
    border border-gray-200 dark:border-slate-600
    rounded-lg px-3 py-2
    hover:scale-105 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]
    hover:border-orange-400 dark:hover:border-orange-500
    hover:bg-orange-50 dark:hover:bg-slate-700
    transition-all duration-300
    cursor-default select-none
  ">
    <span className="text-lg leading-none flex-shrink-0">{icon}</span>
    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-200 whitespace-nowrap truncate">
      {label}
    </span>
  </div>
)

/* ─── Category block ──────────────────────────────────────────── */
const CategoryBlock = ({ label, accent, dot, skills }) => (
  <div>
    {/* Category label */}
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dot}`} />
      <h3 className={`text-sm font-bold uppercase tracking-widest ${accent}`}>{label}</h3>
    </div>
    {/* Chip grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {skills.map(({ icon, label: skillLabel }) => (
        <SkillChip key={skillLabel} icon={icon} label={skillLabel} />
      ))}
    </div>
  </div>
)

/* ─── About component ─────────────────────────────────────────── */
function About() {
  return (
    <div id='About' name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>

      {/* ── Section Header ─────────────────────────────────────── */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
          About Me
        </h1>
        <div className='w-24 h-1 bg-orange-500 mx-auto mb-8'></div>
        <p className='text-xl md:text-2xl text-gray-800 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed'>
          I am a Full Stack MERN Developer with hands-on experience building real-world applications
          like marketplace platforms, admin dashboards, and booking systems. I focus on writing clean,
          scalable code and solving real business problems through technology. I am actively looking
          for opportunities where I can contribute and grow as a developer.
        </p>
      </div>

      {/* ── Info Cards (2-col grid) ─────────────────────────────── */}
      <div className='grid md:grid-cols-2 gap-8 lg:gap-12 mb-10'>

        {/* Education */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mr-4'>
              <FaGraduationCap className='text-orange-500 dark:text-orange-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Education &amp; Training
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            Pursuing B.Tech in Computer Science from Marwadi University, Gujarat.
            Completed intensive MERN Stack Development training with hands-on project experience.
          </p>
        </div>

        {/* Professional Experience */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mr-4'>
              <FaBriefcase className='text-orange-500 dark:text-orange-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Professional Experience
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            Built and delivered multiple real-world projects including a wedding marketplace, vehicle
            rental system, and inventory management platform. Experienced in handling the full project
            lifecycle from frontend to backend and deployment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
          <div className='flex items-center mb-6'>
            <div className='bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mr-4'>
              <FaBullseye className='text-orange-500 dark:text-orange-400 text-2xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Mission Statement
            </h2>
          </div>
          <p className='text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
            My mission is to build scalable, real-world software that solves business problems —
            and to continuously grow as a full-stack engineer while creating measurable impact.
          </p>
        </div>

      </div>

      {/* ── Skills & Expertise — full-width categorized card ────── */}
      <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700'>
        {/* Card header */}
        <div className='flex items-center mb-8'>
          <div className='bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mr-4'>
            <span className='text-orange-500 dark:text-orange-400 text-xl font-bold font-mono'>{`</>`}</span>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Skills &amp; Expertise
            </h2>
            <p className='text-sm text-gray-500 dark:text-slate-400 mt-0.5'>
              Technologies I work with
            </p>
          </div>
        </div>

        {/* Categorized sections — vertical stack */}
        <div className='space-y-8'>
          {skillCategories.map(({ id, label, accent, dot, skills }) => (
            <CategoryBlock
              key={id}
              label={label}
              accent={accent}
              dot={dot}
              skills={skills}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default About