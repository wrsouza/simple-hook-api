import { useState } from 'react';
import api from "../services/api"

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])

    const getPosts = async () => {
        try {
            const response = await api.get('posts')
            setPosts(response.data)
        } catch (err) {
            console.error('getPosts', err)
        }
    }

    return {
        posts,
        getPosts
    }
}

export default usePosts