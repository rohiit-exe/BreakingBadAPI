const Pagination=({totalChar, paginate, currentListLength})=>{
    const pageNumber=[];
    if(loading){
        return(
            <header>Loading...</header>
        )
    }
for(i=1; i=Math.ceil(totalChar/currentListLength); i++){
    pageNumber.push(i);
}
    
    return(
         <div>
            {
                pageNumber.map((pageNo)=>{
                    return(
                        <button 
                        key={pageNo}
                        onClick={()=>paginate(pageNo)}>
                            {pageNo}
                        </button>
                    )
                })
            }
         </div>  
    )
}
export default Pagination;