import React from 'react';

export const AtlLoader: React.FunctionComponent = () => {
    return (
        <div className="ac-atl-loader-container">
            <img className="ac-atl-loader" src={`images/atlassian-icon.svg`} />
            <div>Loading data...</div>
        </div>
    );
};
