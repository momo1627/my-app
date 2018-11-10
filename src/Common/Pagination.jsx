import React from 'react';
function Pagination(props){
    return(
        <div>
            {
                props.lastPage && <button></button>
            }
          <button></button>
          <button></button>
          <button></button>
          <button></button>  
        </div>
    )
}
export default Pagination