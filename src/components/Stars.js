import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars, reviews}) => {
  


  const tempStars = Array.from({length:5}, (_,index)=> {
    
   const number = index + 0.5;
   return (
     <span key={index}>
       {stars >= index + 1 ? (
         <BsStarFill />
       ) : stars >= number ? (
         <BsStarHalf />
       ) : (
         <BsStar />
       )}
     </span>
   );
  })

  
  return <Wrapper>
    <div className="stars">
      {tempStars}
    </div>
    <div className="reviews">
     ({reviews}  customer reviews)
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars



// {
//   /* star One and half */
// }

// {
//   /* end of star One and half */
// }

// {
//   /* star Two and half */
// }
// <span>
//   {stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar />}
// </span>;
// {
//   /* end of star  Two and half*/
// }

// {
//   /* star Three and half */
// }
// <span>
//   {stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar />}
// </span>;
// {
//   /* end of star Three and half */
// }

// {
//   /* star  Four and half */
// }
// <span>
//   {stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar />}
// </span>;
// {
//   /* end of star Four and half */
// }

// {
//   /* star  Five */
// }
// <span>
//   {stars === 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar />}
// </span>;
// {
//   /* end of star Five */
// }