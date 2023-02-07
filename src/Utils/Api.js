import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://nk-news.onrender.com/api'
})

export const getArticles = () => {
    return newsAPI.get('/articles').then(({data})=> {
        return data.articles
    })
} 

export const getArticleById = (id) => {
    return newsAPI.get(`/articles/${id}`).then(({data})=> {
        return data.article
    })
} 

export const patchArticle = (id) => {
    const patchBody = { inc_votes: 1 }
    return newsAPI.patch(`/articles/${id}`, patchBody).then(({data}) => {
        return data
    })
}

export const getArticleComments = (id) => {
    return newsAPI.get(`/articles/${id}/comments`).then(({data}) => {
        return data.comments

    })
}