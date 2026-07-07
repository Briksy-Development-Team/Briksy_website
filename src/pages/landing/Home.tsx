import Hero from './hero/Hero'
import About from './about/About'
import Community from './community/Community'
import Review from './review/Review'
import Process from './process/Process'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

const Home = () => {
    return (
        <div className='bg-[#F7F3EE]'>
            <Hero />
            <About />
            <Community />
            <Process />
            <Review />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
