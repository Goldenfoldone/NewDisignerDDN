import { $authHost,$host } from "./index";



export const createEvents   = async (post) => {
    const {data} = await $authHost.post('/api/events/create', post)
    return data
}

export const fetchEvents = async ( limit = 3, page = 1) => {
    try {
               
        const numericLimit = Number(limit);
        const numericPage = Number(page);
        
        if (isNaN(numericLimit) || isNaN(numericPage) || numericLimit <= 0 || numericPage <= 0) {
            throw new Error('Limit and page must be positive numbers');
        }

        // Делаем запрос с коррекным URL и параметрами
        const response = await $host.get('/api/events/getal', {
            params: {
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
}



export const fetchOneEvents = async (id) => {
    const {data} = await $authHost.get('/api/events/' + id)
    return data
}

export const fetchisOneevents = async (id, post) => {
    const {data} = await $authHost.post('/api/events/is/' + id, post)
    return data
}

export const deleteEvents = async (id) => {
    try {
        const { data } = await $authHost.delete(`/api/events/delete/` + id);
        return data;
    } catch (error) {
        console.error('Failed to delete post:', error);
        return {
            error: true,
            message: error.response?.data?.message || 'Failed to delete post',
            data: null
        };
    }
};