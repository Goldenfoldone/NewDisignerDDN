import { $authHost,$host } from "./index";



export const createPost   = async (post) => {
    const {data} = await $authHost.post('/api/postsy/create', post)
    return data
}

export const fetchPost = async (query, limit = 9, page = 1) => {
    try {
               
        const numericLimit = Number(limit);
        const numericPage = Number(page);
        
        if (isNaN(numericLimit) || isNaN(numericPage) || numericLimit <= 0 || numericPage <= 0) {
            throw new Error('Limit and page must be positive numbers');
        }

        // Делаем запрос с коррекным URL и параметрами
        const response = await $host.get('/api/postsy/getal', {
            params: {
                query,
                limit,
                page
            }
        });

        // Проверяем структуру ответа
        if (!response.data) {
            throw new Error('Invalid API response structure');
        }

        return response.data;
        
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return {
            error: true,
            message: error.message || 'Failed to fetch posts',
            data: null
        };

    }
};



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