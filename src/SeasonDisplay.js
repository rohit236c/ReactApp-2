import './SeasonDisplay.css'
import React from 'react';


const seasonConfig = {
        summer : {
            text : 'lets go to beach',
            iconName : 'sun'
        },
        winter : {
            text : 'burrh !! its chilly',
            iconName : 'snowflake'
        }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season)
//    const text  = season === 'winter'?'burr its chilly' : 'lets go to beach'
//    const icon1 = season === 'winter' ? 'snowflake' : 'sun';
    const currentSeason  = seasonConfig[season]

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left ${currentSeason.iconName} icon massive`  }></i>
        <h1>{currentSeason.text}</h1>
        <i className={`icon-right ${currentSeason.iconName} icon massive` }></i>
    </div>
    );
}

export default SeasonDisplay;