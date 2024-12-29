import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Discover the latest properties listed for sale and rent, featuring premium locations and modern amenities.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
