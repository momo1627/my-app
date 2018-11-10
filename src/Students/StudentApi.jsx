import axios from 'axios';
export function getStudent(pageNumber=1){
    return new Promise((resolve,reject)=>{
        axios
            .get(`https://lms1210.azurewebsites.net/api/students?pageNumber=${pageNumber}`)
            .then(response=>{
                if (response.status>=200 && response.status<300){
                    resolve(response.data)
                } else {
                    reject(response.repsonse)
                }
            })
            .catch(reject)
    })
}
export function getStudentById(id){
    return new Promise((resolve,reject) => {
        axios
            .get(`https://lms1210.azurewebsites.net/api/students/${id}`)
            .then(response => {
                if (response.status >= 200 && response.status<300){
                    resolve(response.data)
                } else {
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function updateStudent(id,values){
    return new Promise((resolve,reject) => {
        axios
            .put(`https://lms1210.azurewebsites.net/api/students/${id}`,{...values,id})
            .then(response => {
                if (response.status >= 200 && response.status<300){
                    resolve(response.data)
                } else {
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function createStudent(student){
    return new Promise((resolve,reject) => {
        axios
            .post('https://lms1210.azurewebsites.net/api/students',student)
            .then(response => {
                if (response.status >= 200 && response.status<300){
                    resolve(response.data)
                } else {
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function deleteStudent(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://lms1210.azurewebsites.net/api/students/${id}`)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response.response);
          }
        })
        .catch(reject);
    });
  }