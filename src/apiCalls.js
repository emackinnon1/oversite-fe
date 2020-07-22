// export const getUsers = async () => {
//     try {
//         const result = await fetch('https://oversite-api.herokuapp.com/users');
//         if(!result.ok) {
//           throw new Error(`Problem received status code of ${result.status}`)
//         }
    
//         const data = await result.json();
//         return data[1];
//     } catch(error) {
//         console.log(error)
//     }
// };


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
            return response
    } catch (error) {
        console.log(error)
    }
}


