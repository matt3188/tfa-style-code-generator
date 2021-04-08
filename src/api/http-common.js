import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-type': 'application/json'
  }
})
