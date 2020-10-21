// import React,  from 'react'
import Axios from 'axios'

const upload = (file, onUploadProgress) =>{
    let formData = new formData()

    formData.append("file", file)

    return Axios.post
}