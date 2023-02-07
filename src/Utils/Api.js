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

export const getArticleComments = (id) => {
    return newsAPI.get(`/articles/${id}/comments`).then(({data}) => {
        return data.comments
    })
}