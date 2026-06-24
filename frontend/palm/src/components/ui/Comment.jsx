import React, { useState } from 'react'
import CommentUi from './CommentUi'
import Circle from './circle'

const Comment = ({heading,smallHeading, star,text}) => {
  const[activeIndex,setActiveIndex]=useState(0)
  const next=()=>{

   setActiveIndex(prev => (prev + 1) % comments.length)
    console.log("button clicekd")
  }
   
  

  const comments=[
    {

      heading :"bakery ",
        smallHeading:"Tripadvisor",
          star:"💠💠💠💠💠" ,
          text:"Delicious coffees and cakes, big selection! Lovely place to sit inside. The affogato was one of my favourites to try! Friendly staff",
        
    },
      {

      heading :"bakery ",
        smallHeading:"Tripadvisor",
          star:"💠💠💠💠💠" ,
          text:"Delicious coffees and cakes, big selection! Lovely place to sit inside. The affogato was one of my favourites to try! Friendly staff",
        
    },

      {

      heading :"bakery ",
        smallHeading:"Tripadvisor",
          star:"💠💠💠💠💠" ,
          text:"Delicious coffees and cakes, big selection! Lovely place to sit inside. The affogato was one of my favourites to try! Friendly staff",
        
    },
      {

      heading :"bakery ",
        smallHeading:"Tripadvisor",
          star:"💠💠💠💠💠" ,
          text:"Delicious coffees and cakes, big selection! Lovely place to sit inside. The affogato was one of my favourites to try! Friendly staff",
        
    },
  ]
  return (
    <>
   <div className="overflow-hidden w-full">
  <div
    className="flex transition-transform duration-500"
    style={{
      transform: `translateX(-${activeIndex * 100}%)`
    }}
  >
    {comments.map((item, index) => (
      <div
        key={index}
        className="min-w-full flex justify-center"
      >
        <CommentUi
          heading={item.heading}
          smallHeading={item.smallHeading}
          star={item.star}
          text={item.text}
        />
      </div>
    ))}
  </div>
</div>

     <div className='flex items-center justify-center mt-16'>
       <Circle next={next}/>
    </div>
 
  
    </>
  )
}

export default Comment
