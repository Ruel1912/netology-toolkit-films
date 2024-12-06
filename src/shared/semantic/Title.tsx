import { FC, ReactNode } from 'react'

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ parametr='' }) => {
  return (
    <h1 className='text-3xl font-bold underline'>{parametr}</h1>
  )
}

export default Title