import auth0 from '@/utils/auth0'

const logout = async (req, res) => {
  try {
    await auth0.handleLogout(req, res)
  } catch (err) {
    console.log(err)
    res.status(err.status || 400).end(error.message)
  }
}

export default logout
