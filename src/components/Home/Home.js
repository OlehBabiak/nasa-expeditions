import React from 'react';
import {HomeWrapper, TextWrapper, TitleWrapper} from "./HomeStyled";

function Home() {
    return (
        <HomeWrapper>
            <TitleWrapper>Congratulations, my friends!</TitleWrapper>
            <TextWrapper>We live in a very interesting time when everything is changing dramatically soon,
                and we are one of the first generations for which an environment where you were born is very
                different from an environment when you are old.</TextWrapper>
            <TextWrapper>
                This is website which helps people to explore NASA`s expeditions to Mars.
                The website provide an ability for you to select a Rover(Curiosity, Opportunity, Spirit), Camera(Front,
                Rear, …) and Sol(Mars day). After the Rover, Camere and Sol were selected, the website show the images
                were done by the Rover.
            </TextWrapper>
        </HomeWrapper>
    );
}

export default Home;