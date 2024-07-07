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
import CustomisedButton from '../../Button/CustomisedButton';
import Dashboard from '../../../pages/Dashboard';

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
						{coins ? (
							coins?.map((coin, i) => (
								<GridComponent coin={coin} key={i} />
							))
						) : (
							<div>
								<h3 style={{ textAlign: 'center' }}>
									No Crypto Currencies Found
								</h3>
							</div>
						)}
					</div>
				</TabPanel>
				<TabPanel value='list'>
					<table className='List-table'>
						<tbody>
							{coins ? (
								coins?.map((coin, i) => (
									<tr key={i}>
										<td>
											<ListComponent coin={coin} />
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										style={{
											textAlign: 'center',
											fontWeight: '600',
											fontSize: '1.2rem',
										}}
									>
										No Crypto Currencies Found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</TabPanel>
			</TabContext>
		</ThemeProvider>
	);
}
