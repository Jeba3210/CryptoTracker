import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { green} from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color:green[500],
    '&:hover': {
      backgroundColor: alpha(green[500], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[500],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ColorSwitches() {
  return (
    <div>
      <GreenSwitch {...label} defaultChecked />
    </div>
  );
}
