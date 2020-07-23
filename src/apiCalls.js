export const getUsers = async () => {

    try {
        const fetchedData = await fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": "https://oversite-api.herokuapp.com/users"
            }
        })
        if (!fetchedData.ok) {
                throw new Error()
            }
            const response = await fetchedData.json();
            return response[1]
    } catch (error) {
        console.log(error)
    }
}


