import React, { useState } from 'react'

function HeroComp({ hero, ...props }) {
    return (
        <section {...props}>
            <div className=''>
                <h2>{hero.name}</h2>
            </div>
            <p>HP: {hero.hp}</p>
            <p>ATK: {hero.atk}</p>
            <p>DEF: {hero.def}</p>
        </section>
    )
}

export default HeroComp
