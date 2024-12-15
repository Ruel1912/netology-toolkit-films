import { FC, ReactNode } from 'react'

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className='text-4xl font-bold mb-4'>{children}</h1>
  )
}

export default Title