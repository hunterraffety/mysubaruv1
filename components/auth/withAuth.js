import { useGetUser } from '../../hooks/useGetUser'
import Redirect from '../shared/Redirect/Redirect'

import { css } from '@emotion/css'

const withAuth = Component => props => {
  const { data, loading } = useGetUser()

  if (loading) {
    return (
      <p
        className={css`
          font-size: 10rem;
        `}
      >
        Loading...
      </p>
    )
  }

  if (!data) {
    return <Redirect ssr to="/api/v1/login" />
  } else {
    return <Component user={data} loading={loading} {...props} />
  }
}

export default withAuth
