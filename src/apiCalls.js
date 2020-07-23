

// export const getUsers = async (url) => {
//     try {
//         const fetchedData = await fetch('https://fe-cors-proxy.herokuapp.com',{
//             headers: {
//                 "Target-URL": `${url}`
//             }
//         })
//         if (!fetchedData.ok) {
//                 throw new Error()
//             }
//         const response = await fetchedData.json();
//             console.log(response)
//             return response[1]
//     } catch (error) {
//         console.log(error)
//     }
// }




export const getUsers = async (url) => {
    
    try {
        const fetchedData = await fetch(`${url}/users`)
       
        if (!fetchedData.ok) {
                throw new Error()
            }
        const response = await fetchedData.json();
            console.log(response)
            return response[0]
    } catch (error) {
        console.log(error)
    }
}
