import React from 'react'
import Card from "./card"
import Saxe from "../assets/saxe.webp"
import NTB from "../assets/ntb.webp"
import { useNavigate } from 'react-router-dom';
import FF from "../assets/ff.webp"
import Bus from "../assets/BusScreen.webp"
import EHT from "../assets/elevhalsoskylt.webp"

export default function projects() {
    const navigate = useNavigate();

    const redirectToAnotherPage = () => {
        // Use navigate to redirect to another page
        navigate('/'); // Updated path without the file extension
    };
    return (
        <div className='container mx-auto md:p-4 p-0 text-white md:w-[60vw]  md:text-xl text-xs align-middle'>
            <div className='grid md:grid-cols-3 gap-x-2  mb-2 bg-blue-400 rounded-lg m-2 md:m-0'>
                <div className='bg-blue-400 rounded-lg shadow-xl min-h-[50px] w-full p-4 '> <button onClick={redirectToAnotherPage}>Home</button></div>
            </div>
            <div className='grid md:grid-cols-2 gap-x-2 gap-y-3 md:grid-flow-row-dense md:m-0 m-2'>
                <Card>Frisör Saxe <br />Fictional hair saloon: HTML/CSS/JS Selenium testing </Card>
                <Card> <img src={Saxe} alt="" /></Card>
                <Card>NTB Car Rental <br /> Fictional Car renter, HTML/Bootstrap/js selenium testing</Card>
                <Card><img src={NTB} alt="" /></Card>
                <Card>Finacial Fluency (WIP) <br />  Figma project i made from the ground up</Card>
                <Card><img src={FF} alt="" /></Card>
                <Card>Bus Sign <br /> Bus Sign fething data from UL and gtfs api. HTML/CSS/JS sqlite</Card>
                <Card><img src={Bus} alt="" /></Card>
                <Card>Student Health sign <br /> Sign displaying information about school health employees. HTML/CSS/JS databases</Card>
                <Card><img src={EHT} alt="" /></Card>
            </div>
        </div>
    )
}
