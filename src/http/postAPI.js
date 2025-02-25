import { $authHost,$host } from "./index";



export const createPost   = async (post) => {
    const {data} = await $authHost.post('/api/postsy/create', post)
    return data
}

export const fetchPost = async (query, page, limit = 1) => {
    const params = new URLSearchParams(query, page, limit)
    const {data} = await $host.get('/api/postsy/getal', {params})
    return data
}



export const fetchOnePost = async (id) => {
    const {data} = await $authHost.get('/api/postsy/' + id)
    return data
}


export const fetchCategory = async () => {
    const {data} = await $authHost.get('/api/category/p')
    return data
}

export const fetchisOnepost = async (id, post) => {
    const {data} = await $authHost.post('/api/postsy/is/' + id, post)
    return data
}