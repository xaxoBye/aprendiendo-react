import { useState } from 'react'

export function TwitterFollowCard ({ userName, children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    const textBtn = isFollowing ? 'Siguiendo' : 'Seguir'
    const classNameBtn = isFollowing 
                            ? 'tw-followCard-button is-following' 
                            : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header  className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`}
                alt='El avatar de midudev'></img>
                <div  className='tw-followCard-info'>
                <strong>{ children }</strong>
                <span className='tw-followCard-infoUsername'>@{ userName }</span>
                </div>
            </header>

            <aside>
                <button  className={ classNameBtn } onClick={handleClick}>
                    <span className='tw-followCard-textBtn'>{ textBtn }</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
                
            </aside>
        </article>
    )
}