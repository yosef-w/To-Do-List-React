import React, { useEffect, useState } from 'react';

export default function PokemonDisplay() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        console.log('Hello I am the effect and I have been executed');
        fetch(`https://pokeapi.co/api/v2/pokemon${pokemon}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, [pokemon]);

    const tableHeaders = ["#", 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];

    return (
        <div>
            <h1 className="text-center">Racer Standings</h1>

            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map( racer => (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <th>{racer.Driver.givenName}</th>
                            <th>{racer.Driver.familyName}</th>
                            <th>{racer.points}</th>
                            <th>{racer.wins}</th>
                            <th>{racer.Driver.nationality}</th>
                            <th>{racer.Constructors[0].name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}