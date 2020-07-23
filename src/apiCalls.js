export const getUsers = async (url) => {
	try {
		const fetchedData = await fetch(`${url}/users`);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		return response[0];
	} catch (error) {
		console.log(error);
	}
};
