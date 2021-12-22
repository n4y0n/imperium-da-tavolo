import heroes from '../assets/heroes'
import anon from '../assets/anonymous.jpg'

function HeroItem({ hero, onChange, ...props }) {
    return (
        <li {...props} className='cursor-pointer min-w-full shadow-xl hover:shadow-lg' key={hero.name + hero.civ} onClick={() => onChange?.({ ...hero })}>
            <div className='flex justify-start p-1 gap-2'>
                <img width={80} src={anon} className='' />
                {hero.name.split('_').join(' ')}
            </div>
        </li>
    )
}

function HeroList({ civ, onChange, ...props }) {
    const civHeroes = heroes[civ]
    return (
        <div {...props} className="flex flex-col items-center min-w-full">
            <ul className='max-w-full'>
                {civHeroes.map(hero => (
                    <HeroItem onChange={onChange} key={hero.name + hero.civ} hero={hero} />
                ))}
            </ul>
        </div>
    )
}

function HeroSelectComp({ onChange, civ, onCivChange, ...props }) {
    const defCiv = Object.keys(heroes)?.[0]

    return (
        <div {...props} className='bg-gray-300 flex flex-col items-center justify-center'>
            <select defaultValue={defCiv} className='my-2' onChange={e => onCivChange(e.target.value)}>
                {Object.keys(heroes).map(civ => <option key={civ} value={civ}>{civ}</option>)}
            </select>
            <hr />
            <h1 className='text-2xl font-bold mt-2'>Eroi disponibili [{civ}]</h1>
            <HeroList civ={civ} onChange={onChange} />
        </div>
    )
}

export default HeroSelectComp
