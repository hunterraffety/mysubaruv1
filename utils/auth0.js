import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
  },
})

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req)
  console.log(session)
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login',
    })
    res.end()
    return null
  }
  return session.user
}
