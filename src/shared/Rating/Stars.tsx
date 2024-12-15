import { FC } from 'react'

interface StarsProps {
  rate: number;
}

const Stars: FC<StarsProps> = ({ rate }) => {
  return (
    <>
      <div className="rating">
        {Array.from({ length: 10 }, (_, index) => (
          <input
            key={`rate-${index}`}
            type="radio"
            name="rating-1"
            className="mask mask-star pointer-events-none"
            defaultChecked={(index + 1) === Math.floor(rate) ? true : false}
            // checked={index === 5 ? 'checked' : ''} 
          />
        ))}
      </div>
    </>
  )
}

export default Stars