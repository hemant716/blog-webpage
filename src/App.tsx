import {  motion } from 'framer-motion';
import Navbar from "./component/Navbar"
import Hero from './component/Hero';
import FeaturedPosts from './component/FeaturePost';
import RecentPosts from './component/RecentPost';
import Categories from './component/Categories';
import Footer from './component/Footer';

const App = () => {
  return (
    <motion.div
     initial={{opacity:0 }}
     animate={{opacity: 1}}
    transition={{duration:0.5}}

    className='min-h-screen bg-gray-50'>
        <Navbar />
        <main>
          <Hero/>
          <FeaturedPosts />
          <RecentPosts />
          <Categories />
          
          </main>   
       <Footer/>
      
      
      
       </motion.div>
  )
}

export default App
