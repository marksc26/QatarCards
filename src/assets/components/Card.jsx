import React from 'react'
import ButtonCard from './ButtonCard'

const Card = ({player, getNewPlayer}) => {
  return (
    <div className='card'>
        <article className='playerCard'>
        
        <div className='image'>
            <img className='image' src={player.image} alt="" />
        </div>
        <div>
            <h2>{player.name}</h2>
            <h3>{player.age}</h3>
            <h3>{player.country}</h3>
            <img className='flag' src={player.flag} alt="" />
            <h3 className='media'>Media <span className='span'>{player.media}</span></h3>
        </div>
        <div className='logos'>
            <img className='qatar' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZN0MkjhhcOp8ZmsO6UshoT0DFdspXuxdOzEd-PMGzm5iw4iYTbw2DQUiu_kxyYTyWpQivKIwKoKIFQoJizL2hUtCHHhbUjwudnV1UN5YDx2jS56nUuhPJ19USQ7zKSHwcz15c3Kp6RKqztEDwNY5xs3oCxkUIfGMU2aC77zHppQoRX0vg5fFvI48s/s1600/Qatar2022128x.png" alt="" />
            <img className='logo' src={player.seleccion} alt="" />
           <div>
             <ButtonCard getNewPlayer={getNewPlayer}/>
           </div>
        </div>
        </article>                          

        
        

    </div>
  )
}

export default Card