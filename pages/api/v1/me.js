import auth0 from '@/utils/auth0'

const me = async (req, res) => {
  try {
    await auth0.handleProfile(req, res)
  } catch (err) {
    console.log(err)
  }
}

export default me
