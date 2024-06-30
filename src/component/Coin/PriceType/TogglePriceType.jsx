
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import './togglePriceType.css'

export default function TogglePriceType({priceType , handlePriceTypeChange}) {

  return (
    <div className="toggle_prices">
 <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        '& .Mui-selected': {
            color: 'var(--green) !important',
        },
        borderColor : 'var(--green) !important',
        border:'unset !important',
        "& .MuiToggleButtonGroup-grouped" : {
            border: '1px solid !important',
            borderColor: 'unset',
            color: 'var(--green)',
        },

        "& .MuiToggleButton-standard" : {
            color: 'var(--green)',
        }
      }}
    >
      <ToggleButton value="prices" className='toggle_btn'> Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle_btn'>MKT Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle_btn'>Volume </ToggleButton>
    </ToggleButtonGroup>
    </div>
   
  );
}
