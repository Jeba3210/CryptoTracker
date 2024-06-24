import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './searchComponent.css'

function SearchComponent({ search, onSearchChange }) {
    return (
        <div className='search-flex'>
            <SearchRoundedIcon />
            <input 
                    type="text" 
                    placeholder='Search' 
                    value={search}
                    onChange={e=>onSearchChange(e)}
                    />
        </div>
    )
}

export default SearchComponent