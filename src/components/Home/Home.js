import React, { useState, useEffect } from 'react';
import './Home.css';
import AllTeam from '../AllTeam/AllTeam';
const Home = () => {
    const [allTeams, setAllTeams] = useState([]);
    // check fetch data 
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English_Premier_League';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllTeams(data.teams));
    }, []);

    return (
        <div>
            <header>
                <h3>Quick BD TEAM</h3>
            </header>
            <section className="team-section container mt-4">
                <div className="row">
                    {
                        allTeams.map(team => <AllTeam data={team} key={team.idTeam}></AllTeam>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;