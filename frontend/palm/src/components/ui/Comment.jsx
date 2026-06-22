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
    <div className='flex flex-col sm:flex-row'>
  
   {comments.map((item,index)=>

   (
    <div className='flex  flex-col sm:flex-row items-center justify-center'>
      <div  key={index}className={index ===activeIndex?"scale-110 opacity-100  flex items-center  overflow-hidden transition-transform duration-300 ":"scale-90 opacity-10 overflow-hidden"}>
        <CommentUi heading ={comments[activeIndex].heading}
        smallHeading={comments[activeIndex].smallHeading}  star={comments[activeIndex].star}
        text={comments[activeIndex].text}

/>
       
      </div>

    </div>

    
  ) )
}
</div>
     <div className='flex items-center justify-center mt-16'>
       <Circle next={next}/>
    </div>
 
  
    </>
  )
}

export default Comment
