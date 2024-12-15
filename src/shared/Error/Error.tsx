import { FC } from 'react'

interface ErrorProps {
  error: string;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <h1 className='badge badge-error p-2 m-3'>{error}</h1>
  )
}

export default Error