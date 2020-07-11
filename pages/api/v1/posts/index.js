import axios from 'axios'

const getPosts = async (req, res) => {
  try {
    const axiosRes = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const posts = axiosRes.data
    res.status(200).json(posts.slice(0, 10))
  } catch (err) {
    console.log(err)
    res.status(err.status || 400).end('error')
  }
}

export default getPosts
