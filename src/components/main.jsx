import React, {useRef, useEffect}from 'react'
import image from '../assets/WhatsApp Image 2023-05-03 at 6.56.19 PM.jpeg'
import { gsap , Power2} from 'gsap'

function Main({timeline}) {
    
    
    let cursor = useRef(null)
    let headText = useRef(null)
    let subText = useRef(null)
    let logo = useRef(null)
    let main = useRef(null)
    let tl = gsap.timeline()

    useEffect(() => {

        tl
            .from(logo, {
                y: '5rem',
                duration: 1
            },'a')
            .from([headText, cursor], {y:'6rem' , delay: .4, ease: Power2.ease},'a')
            .from(subText, {y:'10rem', delay:.4, skewY: 10, ease: Power2.ease}, 'a')
            .to(headText.parentElement, {overflow: 'visible'})
        
        const handelMouseMove = (e) =>{
            main.style.position = 'relative'
            gsap.to(cursor.parentElement, {
                position:'absolute',
                overflow: 'visible',
                top: 0,
                left: 0,
                x: '-50%',
                y: '-50%'
            })
            gsap.to(cursor ,{
                x: e.clientX,
                y: e.clientY,
                ease: Power2.ease
            })

        }
        
        window.addEventListener('mousemove', (e) => handelMouseMove(e))
        
        
    
        return  () => {

            window.removeEventListener('mousemove', (e) => handelMouseMove(e))
        }
    })

    
  return (
    <div ref={el => main = el} className='main h-screen font-["Montserrat"] overflow-hidden' >
        <div className="hero w-full  text-white  max-w-[75rem] mx-auto">
            <div className="wrapper p-4 h-full">
                <div className="header overflow-hidden mt-24  ">
                    <div ref={el => logo = el}  className="  header-wrapper flex items-center gap-4 ">
                        <img src={image} alt="" className='w-[65px] rounded-full'/>
                        <p className=' text-lg font-[500] tracking-[3px]'>ADITYA</p>
                        <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                        </svg>
                    </div>
                </div>
                <div className='overflow-hidden flex items-center mt-24'>
                    <h1 ref={el => headText = el} className=' header font-[500]  leading-[1] capitalize'>frontend devloper</h1>
                    <div className='pointer-events-none overflow-hidden'><svg ref={el => cursor = el} className='svg' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path  fill='#EBD742' d="M9.365,13.055L3,11.242l1.196-3.684l6.304,2.544L10.095,3h3.973l-0.405,7.245l6.142-2.503L21,11.466l-6.486,1.811 l4.257,5.419L15.547,21l-3.689-5.949l-3.649,5.745l-3.223-2.2L9.365,13.055z"/></svg></div>
                </div>
                <div className=' mt-24 flex justify-end overflow-hidden'>
                    <p ref={el => subText = el} className='text-xl pr-4 leading-8 sm:w-[25rem] sm:text-2xl'>Crafting visually stunning and seamlessly functional websites to elevate your brand's digital presence.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main