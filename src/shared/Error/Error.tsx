import { FC } from 'react'

interface ErrorProps {
  error: string;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <h1 className='badge badge-error'>{error}</h1>
  )
}

export default Error