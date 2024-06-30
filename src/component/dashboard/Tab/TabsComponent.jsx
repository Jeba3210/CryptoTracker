import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import GridComponent from '../Grid/GridComponent';
import './tabsComponent.css';
import ListComponent from '../List/ListComponent';

export default function TabsComponent({ coins }) {
	const [value, setValue] = useState('grid');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: '#3DBC1D',
			},
		},
	});

	const style = {
		color: 'var(--white)',
		fontWeight: '600',
		fontSize: '1.2rem',
	};

	return (
		<ThemeProvider theme={theme}>
			<TabContext value={value}>
				<TabList onChange={handleChange} variant='fullWidth'>
					<Tab label='Grid' value='grid' sx={style} />
					<Tab label='List' value='list' sx={style} />
				</TabList>

				<TabPanel value='grid'>
					<div className='flex-grid'>
						{coins.map((coin, i) => {
							return <GridComponent coin={coin} key={i} />;
						})}
					</div>
				</TabPanel>
				<TabPanel value='list'>
					<table className='List-table'>
						<tbody>
							{coins.map((coin, i) => {
								return (
									<tr key={i}>
										<td>
											<ListComponent coin={coin} />
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</TabPanel>
			</TabContext>
		</ThemeProvider>
	);
}
