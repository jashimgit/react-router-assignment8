import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coffee } from '@fortawesome/free-solid-svg-icons';


const TeamDetails = () => {
    const { teamId } = useParams();

    const [teamdata, setTeamdata] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamdata(data.teams))
    })
    // console.log(teamdata.strDescriptionEN)
    return (
        <div>
            <header>
                <h3>Quick BD TEAM</h3>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card bg-danger mt-4 text-white">
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{teamdata[0]?.strTeam}</h5>
                                        <p clasName="card-text">Founded:{teamdata[0]?.intFormedYear}</p>
                                        <p className="card-text">Country name : {teamdata[0]?.strCountry}</p>
                                        <p className="card-text">Sport Type : {teamdata[0]?.strSport}</p>
                                        <p className="card-text">Gender Male/ Female</p>

                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <img src="saf" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-3 text-white">
                    <p>{teamdata[0]?.strDescriptionEN}</p>
                </div>
                <footer className="col-sm-12 mt-4">
                    <div className="social-icon d-flex justify-content-center text-white">


                        <span><FontAwesomeIcon icon={["far", "coffee"]} /></span>


                    </div>
                </footer>
            </div>
            <p>{teamId}</p>
        </div>
    );
};

export default TeamDetails;