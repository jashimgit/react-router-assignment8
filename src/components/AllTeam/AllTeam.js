import React from 'react';
import { Link } from 'react-router-dom';
import './single.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const AllTeam = (props) => {

    return (

        <div className="col-md-3 text-center">
            <div className="card mb-3">
                <img src={props?.data?.strTeamBadge} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{props?.data?.strTeam}</h4>
                    <p className="card-text">Sports Type: {props?.data?.strSport}</p>
                    <Link to={`/team/${props?.data?.idTeam}`}>
                        <button className="btn btn-primary">EXPLORE <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default AllTeam;