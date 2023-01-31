import React from 'react';

function AsteroidsMap(props) {
    return (
        <>
        <div className="big">
            <iframe className="hello" width="100%" height="100vh" seamless="seamless"  src="https://eyes.nasa.gov/apps/asteroids/" frameBorder="0"></iframe>
        </div>
        </>
    );
}

export default AsteroidsMap;