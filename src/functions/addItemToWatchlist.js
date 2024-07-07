import { toast } from 'react-toastify';

export const addItemToWatchlist = (e, id) => {
	e.preventDefault();
	let watchList = JSON.parse(localStorage.getItem('watchlist'));

	if (watchList) {
		if (!watchList.includes(id)) {
			watchList.push(id);
			console.log('coin added successfully');
			toast.success(
				`${
					id.substring(0, 1).toUpperCase() + id.substring(1)
				} is added successfully!`
			);
		} else {
			toast.error(
				`${
					id.substring(0, 1).toUpperCase() + id.substring(1)
				} is already added!`
			);
		}
	} else {
		watchList = [id];
		toast.success(
			`${
				id.substring(0, 1).toUpperCase() + id.substring(1)
			} is added successfully!`
		);
	}
	localStorage.setItem('watchlist', JSON.stringify(watchList));
};
