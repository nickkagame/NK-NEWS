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

export const postComment = (id, usernameInput, commentInput) => { 
    const commentToAdd = {
        username: usernameInput,
        body: commentInput
      };
    return newsAPI.post(`/articles/${id}/comments`, {
        username: usernameInput,
        body: commentInput
      }).then((response) => {
        return response
    }).catch((err)=> {
        return Promise.reject((err.response.data.msg))
    })
}
export const getTopics = () => { 
    return newsAPI.get("/topics")
    .then(({data}) => { 
        return data.topics
    })
}

export const deleteComment = (comment_id) => {
    console.log(comment_id)
    return newsAPI.delete(`/comments/${comment_id}`).then((response)=> {
        response.message = "Comment Deleted"
        return response
    })
}