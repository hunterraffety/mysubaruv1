import { useEffect, useState } from 'react'

export const useGetData = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/v1/posts')
      const result = await res.json()
      if (res.status !== 200) {
        setError(result)
      } else {
        setData(result)
      }
      setLoading(false)
    }

    fetchData()
  }, [])
  return { data, error, loading }
}
