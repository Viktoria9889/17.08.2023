import style from './StarWars.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StarWarsName from './StarWarsName/StarWarsName'
import StarWarsInfo from './StarWarsInfo/StarWarsInfo'
import StarWarsInput from './StarWarsInput/StarWarsInput'

function StarWars() {
    const [loading, setLoading] = useState(true);
    const [starData, setStarData] = useState();
    const [starIdPeople, setStarIdPeople] = useState(1)

    const getStarData = async () => {
        setLoading(true)
        const result = await axios.get(`https://swapi.dev/api/people/${starIdPeople}/`)
        setStarData(result.data)
        setLoading(false)
    }


    useEffect(() => {
        getStarData()
    }, [starIdPeople])

    
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <StarWarsInput idCharakter={setStarIdPeople}/>
            <StarWarsName name={starData.name} />
            <StarWarsInfo personlInfo={starData} />
        </div>
    )

}

export default StarWars
