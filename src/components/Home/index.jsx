import { useState } from 'react'
import "./style.css";
import { motion } from "framer-motion";
import useMediaQuery from "../../utils/useMediaQueries";

function Home() {
  const matches = useMediaQuery("(min-width:600px)");
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className=" absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src="../../../public/avatar.png" alt="profile picture of Hua" />
      </div>
      {/* Title */}
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      {matches && (
        <div className="flex gap-12" >
          <a href="/">Home</a>
          <a href="/services">Service</a>
          <a href="/blog">Blog</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span 
          animate={{rotateZ:toggled?45:0,y:toggled?8:0,}}
          className="block h-0.5 w-8 bg-black" />
          <motion.span className="block h-0.5 w-6 bg-black"style={{display:toggled?'none':''}}
          />
          <motion.span 
          animate={{rotateZ:toggled?-45:0,y:toggled?-1:0
          ,width:toggled?32:16,
          }}
          className="block h-0.5 w-4 bg-black" />
        </div>
      )}

      {/* Check if we are on mobile or not */}
      {toggled && !matches && (
        <motion.div 
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:25}}
        className="flex items-center bg-white fixed bottom-0 z-40" style={{left:0,width:'100%',height:'100vh',justifyContent:'center'}}>
            <div className="flex font-bold gap-24" style={{flexDirection:'column',fontSize:'1.2rem'}}>
                <a href="/">Home</a>
                <a href="/services">Service</a>
                <a href="/contact">Contact</a>
            </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Home;
