import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useData = () => {
  const d = useSWR('/api/hello', fetcher)
  return d
}