import axios from 'axios'
import swal from 'sweetalert2'
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})