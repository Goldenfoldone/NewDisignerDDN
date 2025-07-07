import { $authHost,$host } from "./index";

export const createReviews   = async (post) => {
    const {data} = await $host.post('/api/reviews/create', post)
    return data
}

export const fetchReviews  = async (query, limit = 4, page = 1) => {
    try {
               
        const numericLimit = Number(limit);
        const numericPage = Number(page);
        
        if (isNaN(numericLimit) || isNaN(numericPage) || numericLimit <= 0 || numericPage <= 0) {
            throw new Error('Limit and page must be positive numbers');
        }

        // Делаем запрос с коррекным URL и параметрами
        const response = await $authHost.get('/api/reviews/getal', {
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
