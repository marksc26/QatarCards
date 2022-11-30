import React from 'react'

const ButtonCard = ({getNewPlayer}) => {
  return (
    <div>
        <button onClick={getNewPlayer} className="button">
            <i class='bx bxs-right-arrow'></i>
        </button>
    </div>
  )
}

export default ButtonCard