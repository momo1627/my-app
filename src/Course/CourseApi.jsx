import React from 'react';
import axios from 'axios'

export function getCourse(){
    return new Promise((resolve,reject) => {
        axios
            .get('https://lms1210.azurewebsites.net/api/courses ')
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
export function getCourseById(id){
    return new Promise((resolve,reject) => {
        axios
            .get(`https://lms1210.azurewebsites.net/api/courses/${id}`)
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
export function updateCourse(id,values){
    return new Promise((resolve,reject) => {
        axios
            .put(`https://lms1210.azurewebsites.net/api/courses/${id}`,{...values,id})
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
export function createCourse(course){
    return new Promise((resolve,reject) => {
        axios
            .post('https://lms1210.azurewebsites.net/api/courses',course)
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
export function deleteCourse(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://lms1210.azurewebsites.net/api/courses/${id}`)
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