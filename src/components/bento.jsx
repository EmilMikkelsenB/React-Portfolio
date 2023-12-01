import React, { useEffect } from 'react';
import Card from './card';
import GH from '../assets/icons8-github.svg';
import Linkedin from '../assets/icons8-linkedin.svg';
import { useNavigate } from 'react-router-dom';
import { typeDeteteEffect } from "./textChange"

export default function Bento() {
    const navigate = useNavigate();

    const redirectToAnotherPage = () => {
        // Use navigate to redirect to another page
        navigate('/projects'); // Updated path without the file extension
    };

    useEffect(() => {
        document.body.style.backgroundColor = "#212124"
    }, []);

    useEffect(() => {
        typeDeteteEffect()

    }, [])


    return (
        <>


            <div className='container mx-auto mt-[20vh] md:p-4 p-0 text-white md:w-[60vw]  md:text-xl text-xs align-middle'>

                <div className='grid md:grid-cols-3 gap-x-2 gap-y-3 md:grid-flow-row-dense md:m-0 m-2'>
                    <Card ><span className=''>Hi&nbsp;Im&nbsp;Emil!&nbsp;I&nbsp;code&nbsp;and&nbsp;design</span></Card>

                    <div className='flex shrink-0 md:flex-row  min-h-[5vh] gap-x-2 justify-center'>
                        <div className='bg-cardBlack rounded-lg shadow-xl  lg:min-h-[50px]  lg:w-[4vw] p-4 flex justify-center items-center'><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/emil-mikkelsen-b%C3%A5ge-137191223/"><img src={Linkedin} alt="" className='object-cover' /></a></div>

                        <div className='bg-cardBlack  rounded-lg shadow-xl  lg:min-h-[50px]  lg:w-[4vw] p-4 flex justify-center items-center'><a target='_blank' rel='noopener noreferrer' href="https://github.com/EmilMikkelsenB"><img src={GH} alt="" /></a></div>
                        <div className='bg-blue-400 rounded-lg shadow-xl min-h-[50px] w-full p-4'><button onClick={redirectToAnotherPage}>Projects</button></div>
                    </div>
                    <div className='row-span-0 min-h-[50px] '><Card>Im&nbsp;proficient&nbsp;at: <span id='skills'></span></Card></div>
                    <div className='md:col-span-2 md:row-span-3 col-span-1 row-span-4 md:flex-1 flex'><Card> <span className='text-2xl'>Work experience<br /></span>
                        <span className='text-blue-500'>Currently: Kaliber bar - bartending <br /><br /></span>
                        Frick och Hagberg Foodtruck - Foodtruck/Bar: customer service, cash management, bartending<br /><br />
                        K karaoke Uppsala - customer service, bartending<br /><br />
                        Bivaxfabriken - producing, packaging<br /><br />
                        The English Bookshop - Store Clerk, customer service, cash management, storekeeping</Card>
                    </div>
                    <Card>
                        <ul className='list-none '>
                            <li className=''>Contact:</li>
                            <li className=' text-blue-400 '><a href="mailto: emil.mikkelsenbage15@gmail.com" className=' ' >emil.mikkelsenbage15@gmail.com</a></li>
                        </ul>
                    </Card>
                    <div className='row-span-2 md:col-span-1 md:row-span-2 md:flex-1 flex '>
                        <Card>Currently studying to become an upper graduate school engineer in software development. The course includes: Automatic Testing, Software development and scrum. Checkout my Github for personal and school projects</Card>
                    </div>


                </div>
            </div >
        </>
    )
}

