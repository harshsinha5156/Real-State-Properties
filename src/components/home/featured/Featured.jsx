import React from 'react'
import "./Featured.css"
import Heading from '../../common/Heading'
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
    <section className='featured background'>
        <div className="container">
            <Heading title= 'Featured Property Type' subtitle= 'Find All Type of Property.'/>
            <FeaturedCard/>
        </div>
    </section>
    </>
  )
}

export default Featured