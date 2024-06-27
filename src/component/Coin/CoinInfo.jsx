import React, { useState } from 'react'
import './coinInfo.css'

function CoinInfo({desc, name}) {
const short_desc = desc.slice(0,350) + "<span>... <br/><br/> <p style='color : var(--grey)'>Read More...</p></span>";
const long_desc = desc + "<span><br/><br/><p style='color : var(--grey)'>Read less...</p></span>";

const [flag, setflag] = useState(true);

function handleFlag() {
    setflag(!flag);
}
  return (
    <div className='info-wrapper'>
<h2 className='info-name'>{name}</h2>
     { flag ? <p  onClick={handleFlag}
       dangerouslySetInnerHTML={{__html: short_desc}}
       /> :

    <p  onClick={handleFlag}
       dangerouslySetInnerHTML={{__html: long_desc}}
       />
    }
    </div>
  )
}

export default CoinInfo