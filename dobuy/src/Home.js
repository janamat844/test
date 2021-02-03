import React from 'react'
import Header from './Header'
import Footer from './Footer'
//import Navbar from './Navbar';
import Photos from './Photos'
import Carousel from './Carousel'
import Form from './Form'
import Gallery from './Gallery'
let LoggedIn=true;






function Home() {
    return (
        <div>
        <Header/>
        <Carousel/>
        <Photos/>
        <Gallery/>
        {LoggedIn===false&&<Form/>}
        <Footer/>
        </div>
       

    )
}

export default Home
