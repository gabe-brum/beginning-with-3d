import Globe from 'react-globe.gl'
import Button from '../../components/Button'
import { useState } from 'react'

const AboutMe = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("gabrielbrumdaluz@gmail.com")

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className="c-space my-20 mx-auto max-w-screen-xl" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Gabriel</p>
              <p className="grid-subtext">With 3 years of experience, I have honed my skills in frontend and backend development websites.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid2" className="w-full sm:tw-w-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">I specialize in Javascript / Typescript with focus on React and Next.js ecosystems.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe 
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                labelsData={[{ lat: -29.6846, lng: -51.1419, text: "I'm here, in Novo Hamburgo, Brazil", color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones</p>
              <p className="grid-subtext">I'm based in Brazil, with remote work available.</p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I loved solving problems ans building things through code. Coding isn't just my profession - it is my passion.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

            <div className='space-y-2'>
              <p className="grid-subtext text-center">Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />
                <p className='lg:text-2xl md:text-xl text-gray_gradient text-white'>gabrielbrumdaluz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe