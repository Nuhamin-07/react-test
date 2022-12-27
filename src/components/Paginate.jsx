import React from 'react';


const Paginate = ({ videosPerPage, totalVideos, paginate, previousPage, nextPage }) => {

   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
      pageNumbers.push(i);
   }
   
   return (
      <div>
            <button onClick={previousPage} >
               Prev
            </button>
            {pageNumbers.map((number) => (
               <div
                  key={number}
                  onClick={() => paginate(number)}
               >
                  {number}
               </div>
            ))}
            <button onClick={nextPage}>
               Next
            </button>
         
      </div>
   );
};
 
export default Paginate;