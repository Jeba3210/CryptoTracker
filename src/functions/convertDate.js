export const convertDate = (date) => {
	const myDate = new Date(date);
	return myDate.getDate() + '/' + (myDate.getMonth() + 1);
};
