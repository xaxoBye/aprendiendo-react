import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './app.css'


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    isFollowing: true
  }
]

export function App() {

  return (
    <section className='contenedor'>
      {
        users.map(user => {
          const {userName, name, isFollowing} = user

          return (
            <TwitterFollowCard 
              initialIsFollowing={isFollowing}
              userName={userName} 
              key={userName}
            >
                name
            </TwitterFollowCard>  
          )

        })
      }
    </section>

  )
}