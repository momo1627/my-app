import React from 'react';
function PageNumber(props){
    const {totalPage, currentPage, changePage} = props;
    const hasPrev = currentPage>1;
    const hasNext = currentPage<totalPage;
    let pageNumber =[];
    if (currentPage === 1){
        pageNumber = [1,2,3]
    } else if(currentPage === totalPage){
        pageNumber = [totalPage-2,totalPage-1,totalPage]
    } else{
        pageNumber = [totalPage-1,totalPage,totalPage+1]
    }
    const element = pageNumber.map((item)=>{return <button onClick={changePage.bind(this,item)}>{item}</button>})
    return (
        <div>
          {hasPrev && <button>previous</button>}
          {hasNext && <button>next</button>}
          <div>{element}</div>
        </div>
    )
}
export default PageNumber