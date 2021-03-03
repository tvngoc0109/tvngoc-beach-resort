import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

// set hero = mac dinh className
Hero.defaultProps = {
    hero: 'defaultHero'
}