import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './teamdetails.css';
import maleImage from '../../assets/team-photo/male.png';
import femaleImage from '../../assets/team-photo/female.png';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamdata, setTeamdata] = useState({ teamId });
    let teamImage;


    useEffect(() => {
        if (teamId) {
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setTeamdata(data.teams))
        }
    }, [teamId])


    // check for male or female team 
    if (teamdata[0]?.strGender === "Male") {
        teamImage = maleImage;
    } else if (teamdata[0]?.strGender === "Female") {
        teamImage = femaleImage;
    }


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
                                        <p clasName="card-text"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {teamdata[0]?.intFormedYear}</p>
                                        <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country name : {teamdata[0]?.strCountry}</p>
                                        <p className="card-text"> <FontAwesomeIcon icon={faFutbol} /> Sport Type : {teamdata[0]?.strSport}</p>
                                        <p className="card-text"><FontAwesomeIcon icon={faMars} /> Gender : {teamdata[0]?.strGender}</p>

                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <img className="img-fluid w-100" src={teamImage} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mt-3 text-white">
                    <p className="text-justify">{teamdata[0]?.strDescriptionEN}</p>
                </div>


                <footer className="col-sm-12 mt-4">
                    <div className="social-icon d-flex justify-content-center text-white">

                        <span>
                            <a href={teamdata[0]?.strFacebook} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        </span>
                        <span>
                            <a href={teamdata[0]?.strTwitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        </span>
                        <span>
                            <a href="instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        </span>


                    </div>
                </footer>
            </div>
        </div >
    );
};

export default TeamDetails;