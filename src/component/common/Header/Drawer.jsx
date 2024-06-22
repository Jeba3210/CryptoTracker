import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);




    return (
        <div>


            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='menu' />
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >

                <div className="drawer_div">
                    <a href="/" className='link'><p>Home</p></a>
                    <a href="/" className='link'><p>Compare</p></a>
                    <Link  className='link' to={`dashboard`}><p>Dashboard</p></Link>
                </div>


            </Drawer>


        </div>
    );
}