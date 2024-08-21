'use server'
import axios from "axios";
import { TaskType } from "./types";
import TaskForm from "./componants/TaskForm";


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
        const response = await axios.get(`http://localhost:3000/api/tasks/${id}`);
        return response.data; // Axios automatically parses the JSON
    } catch (error) {
        throw new Error('Failed to get task');
    }
}

//create new task
export async function newTask(task:TaskForm) {
    try {
        const response = await axios.post(baseURL, task);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create task');
    }
    
}

//update task
export async function updateTask(task: TaskType) {
    const taskURL = baseURL + task.id.toString()
    try {
        const response = await axios.patch(taskURL, task);
        return response.data;

    } catch (error) {
        throw new Error('Failed to update task');
    }

}

//delete task
export async function deleteTask(task: TaskType) {
    const taskURL = baseURL + task.id.toString()
    try {
        const response = await axios.delete(taskURL);
        return response.data

    } catch (error) {
        throw new Error('Failed to delete task');
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