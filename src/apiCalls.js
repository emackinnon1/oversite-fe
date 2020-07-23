
export const getUsers = async (url) => {
    try {
        const fetchedData = await fetch(url)
        //     headers: {
        //         "Target-URL": "https://oversite-api.herokuapp.com/users"
        //     }
        // })
        if (!fetchedData.ok) {
                throw new Error()
            }
        const response = await fetchedData.json();
            return response[1]
    } catch (error) {
        console.log(error)
    }
}




