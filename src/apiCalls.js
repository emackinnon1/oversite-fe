export const getUser = async (url) => {
	try {
		const fetchedData = await fetch(`${url}/user/1`);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		return response;
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

export const getMemberInfo = async (url, id) => {
	try {
		const fetchedData = await fetch(`${url}member/${id}`);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		console.log(response.results);
		return response.results;
	} catch (error) {
		console.log(error);
	}
};

// export const twitterPing = () => {
// 	fetch("https://gentle-falls-99830.herokuapp.com/");
// };

export const sendTweet = async (url, message, handle, e) => {
	e.preventDefault();
	try {
		const fetchedData = await fetch(
			`${url}tweet?message=${message}&handle=${handle}`
		);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		window.alert(response.message);
		return true;
	} catch (error) {
		window.alert(error);
		return false;
	}
};

export const getMyReps = async (url) => {
	try {
		const fetchedData = await fetch(`${url}/users_reps/1`);
		if (!fetchedData.ok) {
			throw new Error();
		}
		const response = await fetchedData.json();
		return response;
	} catch (error) {
		console.log(error);
	}
};
