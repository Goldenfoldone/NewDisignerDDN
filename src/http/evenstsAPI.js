import { $authHost,$host } from "./index";



export const createEvents   = async (post) => {
    const {data} = await $authHost.post('/api/events/create', post)
    return data
}

export const fetchEvents = async (query, limit = 1) => {
    
    const {data} = await $host.get('/api/events/getal')
    return data
}



export const fetchOneEvents = async (id) => {
    const {data} = await $authHost.get('/api/events/' + id)
    return data
}

export const fetchisOneevents = async (id, post) => {
    const {data} = await $authHost.post('/api/events/is/' + id, post)
    return data
}