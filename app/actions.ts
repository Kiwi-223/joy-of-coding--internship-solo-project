'use server'
import axios from "axios";

const baseURL = 'http://localhost:3000/api/tasks'

//getAllTasks
export async function getAllTasks() {
    try {
        const response = await axios.get(baseURL);
        return response.data; // Axios automatically parses the JSON
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
}

// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });