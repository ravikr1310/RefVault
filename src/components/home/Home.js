import React from 'react';
import Banner from './Banner';
import WhatWeDo from './WhatWeDo';
import OurValueProposition from './OurValueProposition';
import WhoYouAre from './WhoYouAre';
import OurProcess from './OurProcess';
import Features from './Features';
import Testimonials from './Testimonials';
import Join from './Join';

function Home() {
    return (
        <>
            <Banner />
            <WhatWeDo />
            <OurValueProposition />
            <WhoYouAre />
            <OurProcess />
            <Features />
            <Testimonials />
            <Join />
        </>
    )
}

export default Home