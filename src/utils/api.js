import axios from "axios";
import { getQueriesForElement } from "@testing-library/react";

const Endpoint = "http://localhost:3030"



export default {

  UserProfile: {
    User :{
      // userObj :{
      //   "id": 0,
      //   "name": "Ritwik",
      //   "username": "rd",
      //   "password": "ritwik",
        // "esign": "data:image/png;base64,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"
      // }
    
      userObj : null
    
    },
    Session :{
      loggedIn:false
    },

    



  },

  WorkFlow:{
        
  },



  

    posts(url) {
        return {
          getOne: ({ id }) => axios.get(`${url}/${id}`),
          getAll: () => {return `${Endpoint}/${url}`},
          update: (toUpdate) =>  axios.put(url,toUpdate),
          create: (toCreate) =>  axios.put(url,toCreate),
          delete: ({ id }) =>  axios.delete(`${url}/${id}`)
        }
      },
    forms(url){
      return {

        get : (title) => {return `${Endpoint}/${url}?title=${title}`}
      }
    },
    flowChart(url){
      return{

        get : (title) => {return `${Endpoint}/${url}?title=${title}`}
      }
    },
    menu(url){
      return `${Endpoint}/${url}`
      
    },

    users(url){
      return {
        get :(username) =>{ return `${Endpoint}/${url}?username=${username}`}
      }
    },
    getWorkFlow(url){
      return {
        get :(username,title) =>{ return `${Endpoint}/${url}?User=${username}&Title=${title}`}
      }
    },

    saveMenu(url,id){
      return {
        put :(payload) => axios.put(`${Endpoint}/${url}/${id}`,payload)
      }
    },
    saveCustomFlowChart(url){
      return {
        post :(payload) => axios.post(`${Endpoint}/${url}`,payload)
      }
    },

    saveCustomForm(url){
      return {
        post :(payload) => axios.post(`${Endpoint}/${url}`,payload)
      }
    },
    workflow(url){
      return{

        post : (payload) => axios.post(`${Endpoint}/${url}`,payload)

      }
    },

    saveUser(url,id){
      return{
        put : (payload) => axios.put(`${Endpoint}/${url}/${id}`,payload)
      }
    },
    setUser(userObj){
      this.UserProfile.User.userObj = userObj
    },

    setSession(value){
      this.UserProfile.Session.loggedIn = value
    },

    getSession(){
      return this.UserProfile.Session.loggedIn
    },

    getUser(){
      return this.UserProfile.User.userObj
    }


    
}