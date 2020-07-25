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

export const searchRepsByState = async (url, state) => {
	try {
		const fetchedData = await fetch(`${url}members_by_state/${state}`);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		return response;
	} catch (error) {
		console.log(error);
	}
};
