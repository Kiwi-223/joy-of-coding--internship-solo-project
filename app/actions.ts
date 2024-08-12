'use server'
import axios from "axios";
import { TaskType } from "./types";

const baseURL = 'http://localhost:3000/api/tasks/'

//getAllTasks
export async function getAllTasks() {
    try {
        const response = await axios.get(baseURL);
        return response.data; // Axios automatically parses the JSON
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
}

//Get single task
export async function getSingleTask(id:string) {
    try {
        const response = await axios.get('http://localhost:3000/api/tasks/1');
        return response.data; // Axios automatically parses the JSON
    } catch (error) {
        throw new Error('Failed to fetch task');
    }
}


//update task
export async function updateTask(task: TaskType) {
    const taskURL = baseURL + task.id.toString()
    try {
        const response = await axios.patch(taskURL, task);
        console.log(response.data);
        return response.data;

    } catch (error) {
        throw new Error('Failed to update task');
    }

}


// axios.patch(url[, data[, config]])
// const updateUser = await prisma.user.update({
//     where: {
//       email: 'viola@prisma.io',
//     },
//     data: {
//       name: 'Viola the Magnificent',
//     },
//   })

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