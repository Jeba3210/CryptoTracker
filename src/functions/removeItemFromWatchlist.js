import { toast } from 'react-toastify';

export const removeItemFromWatchlist = (e, id, setIsCoinAdded) => {
	e.preventDefault();
	if (
		window.confirm(
			'Are you sure you want to remove this coin from your watchlist?'
		)
	) {
		let watchList = JSON.parse(localStorage.getItem('watchlist'));
		let newList = watchList.filter((coin) => coin != id);
		setIsCoinAdded(false);
		localStorage.setItem('watchlist', JSON.stringify(newList));
		console.log('coin removed successfully');
		toast.success(
			`${
				id.substring(0, 1).toUpperCase() + id.substring(1)
			}  has been removed!`
		);
		window.location.reload();
	} else {
		toast.error(
			`${
				id.substring(0, 1).toUpperCase() + id.substring(1)
			}  could not be removed!`
		);
		setIsCoinAdded(true);
	}
};
