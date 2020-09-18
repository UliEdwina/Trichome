import {Axios} from './Axios'

export const apiSendForm = (newMesssage) => {
    const message = {
        newMessage: ''
    }
    return new Promise((resolve, reject) => {
        Axios.post('api/send', message, axiosConfig)
            .then(result => { 
            
                resolve(result.data)
            })
            .catch(error => reject(error))
    })
}