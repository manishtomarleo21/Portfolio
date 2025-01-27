import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, 
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_5csvk2n", 
      "template_vjtidgu", 
      {
        from_name:form.name,
        to_name:'Manish',
        from_email:form.email,
        to_email:'manishtomarleo21@gmail.com',
        message:form.message
      },
      'A32gp2SqT_GQrX2jt'
      ).then(()=>{
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name:'',
          email:'',
          message:''
        })
      }, (error)=> {
        setLoading(false)

        console.error(error);
        alert('Something went wrong!')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-transparent p-8 rounded-2xl'
      >
         <p className={styles.sectionSubText}>Get in touch</p> 
         <h3 className={styles.sectionHeadText}>Contact.</h3>

         <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
         >
          <label className='flex flex-col'>
            <span className='text-red-500 font-medium mb-4'>
              Your Name
            </span>
            <input type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-gray-800 bg-opacity-50 py-4 px-6 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-red-500 font-medium mb-4'>
              Your Email
            </span>
            <input type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-gray-800 bg-opacity-50 py-4 px-6 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-red-500 font-medium mb-4'>
              Your Message
            </span>
            <textarea rows={7} 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Share your message here..."
              className='bg-gray-800 bg-opacity-50 py-4 px-6  text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-red-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-red-900 rounded-xl'>
            {loading ? 'Sending...': 'Send'}
          </button>
         </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
         <EarthCanvas/> 
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
