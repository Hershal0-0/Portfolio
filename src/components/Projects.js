import React,{useRef} from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'

// const breakPoints=[
//     {width : 1, itemsToShow : 1},
//     {width : 550, itemsToShow : 2},
//     {width : 768, itemsToShow : 3},
//     {width : 1200, itemsToShow : 4}
// ]


function Projects() {
    const values=[1,2,3,4,5,6,7,8,9]
    const itemsPerPage = 1

    const carouselRef = useRef(null);
    const totalPages = Math.ceil(values.length / itemsPerPage)
    let resetTimeout;
    return (
        <div>
            <div className="container projects">
                <h2>Past Projects</h2>
            </div>
            <Carousel
            ref={carouselRef} 
            transitionMs={1000}
            enableSwipe={true}
            enableAutoPlay={true}
            autoPlaySpeed={5000}
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === totalPages) {
                   resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0)
                  }, 1500) // same time
                }
           }} 
            >
                {values.map(value => <Item value={value} />)}
            </Carousel>
        </div>
    )
}

export default Projects
