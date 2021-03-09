import React, { useState, useEffect } from 'react';
import './Home.css';
import SingleTeam from './../SingleTeam/SingleTeam';
const Home = () => {
    const [allTeams, setAllTeams] = useState({});
    // check fetch data 
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllTeams(data));
    });

    // console.log(allTeams.teams[0]);
    allTeams.teams[0].map(t => console.log(t.id))


    return (
        <div>
            <header>
                <h3>Quick BD TEAM</h3>
            </header>
            <section className="team-section container mt-4">
                <div className="row">
                    {/* {
                        allTeams.map(team => <SingleTeam singleData={team}></SingleTeam>)
                    } */}


                </div>
            </section>
        </div>
    );
};

export default Home;