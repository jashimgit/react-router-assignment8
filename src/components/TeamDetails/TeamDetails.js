import React from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const { teamId } = useParams()
    return (
        <div>
            <p>{teamId}</p>
        </div>
    );
};

export default TeamDetails;