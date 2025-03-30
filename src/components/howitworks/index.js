import React from 'react'
import Individuals from './Individuals';
import BannerHitW from './BannerHitW';
import Opportunity from './Opportunity';
import Institutions from './Institutions';
import GetStartedToday from './GetStartedToday';

function HowItWorks() {
    return (
        <div>
            <BannerHitW />
            <Individuals />
            <Opportunity />
            <Institutions />
            <GetStartedToday />
        </div>
    )
}

export default HowItWorks;