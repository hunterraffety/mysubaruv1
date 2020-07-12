import auth0 from '@/utils/auth0'

const login = async (req, res) => {
  try {
    await auth0.handleLogin(req, res)
  } catch (err) {
    console.log(err)
    res.status(err.status || 400).end(error.message)
  }
}

export default login
