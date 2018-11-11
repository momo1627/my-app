import axios from 'axios'
export function getLecturers(){
    return new Promise((resolve,reject)=>{
        axios
            .get('https://lms1210.azurewebsites.net/api/lecturers')
            .then(response=>{
                if(response.status>=200 && response.status<300){
                    resolve(response.data)
                } else{
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function getLecturersById(id){
    return new Promise((resolve,reject)=>{
        axios
            .get(`https://lms1210.azurewebsites.net/api/lecturers/${id}`)
            .then(response=>{
                if(response.status>=200 && response.status<300){
                    resolve(response.data)
                } else{
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function updateLecturersById(id,value){
    return new Promise((resolve,reject)=>{
        axios
            .put(`https://lms1210.azurewebsites.net/api/lecturers/${id}`,{...value,id})
            .then(response=>{
                if(response.status>=200 && response.status<300){
                    resolve(response.data)
                } else{
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function createLecturersById(lecturers){
    return new Promise((resolve,reject)=>{
        axios
            .post(`https://lms1210.azurewebsites.net/api/lecturers/`,lecturers)
            .then(response=>{
                if(response.status>=200 && response.status<300){
                    resolve(response.data)
                } else{
                    reject(response.response)
                }
            })
            .catch(reject)
    })
}
export function deleteLecturers(id){
    return new Promise((resolve, reject) => {
        axios
          .delete(`https://lms1210.azurewebsites.net/api/lecturers/${id}`)
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