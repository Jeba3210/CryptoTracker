import{useState} from 'react';
import Pagination from '@mui/material/Pagination';
import './paginationComponent.css'


export default function PaginationComponent({page , handlePageChange}) {
 
  return (
    <div className='pagination'>
      <Pagination 
                    count={10}
                     page={page} 
                     onChange={(event , value) => handlePageChange(event , value)}
                     sx={{
                        color:"var(--white)",
                        "& .Mui-selected" :  {  backgroundColor: "var(--green) !important",
                        color : "#fff !important",
                        borderColor: "var(--green) !important",
                    },
                    "& .MuiPaginationItem-ellipsis" : {
                        border: "0px solid var(--grey) !important",
                    },
                    "& .MuiPaginationItem-text" : {
                        color:"var(--white)",
                        border: "1px solid var(--grey)", 
                    }
                     }}
      
      />
    </div>
  );
}
