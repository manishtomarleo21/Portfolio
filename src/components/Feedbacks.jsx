import { motion } from "framer-motion"
import { styles } from "../style"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({index, testimonial, name, designation, company, image}) =>{
  return(
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#1a1a1a] border border-red-600 p-10 rounded-3xl xs:w-[320px] w-full transform transition-transform hover:scale-105" 
    >
      <p className="text-red-500 font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="text-red-500">@</span>{name} 
              </p>
              <p className="mt-1 text-red-400 text-[12px]">
                {designation} of {company}
              </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover border-2 border-red-600"/>
        </div>
      </div>
    </motion.div>
  )
} 

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px] border border-red-700 shadow-lg shadow-red-500/50 hidden">
      <div className={`${styles.padding} bg-[#1a1a1a] rounded-2xl min-h-[300px] border border-red-700`}>
        <motion.div variants={textVariant()}>
          <p className="text-red-400">{styles.sectionSubText}</p>
          <h2 className="text-red-500">{styles.sectionHeadText}</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index)=>(
            <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")