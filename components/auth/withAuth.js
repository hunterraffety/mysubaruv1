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
    return <Redirect to="/api/v1/login" />
  } else {
    return <Component {...props} />
  }
}

export default withAuth
