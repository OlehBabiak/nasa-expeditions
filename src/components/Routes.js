import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CuriosityImageList from "./RoversImages/CuriosityImageList";
import OpportunityImageList from "./RoversImages/OpportunityImageList";
import SpiritImageList from "./RoversImages/SpiritImageList";
import Home from "./Home/Home";
import RoversDetailsPage from "./RoversImages/RoversDetailsPage";
import {Container} from "./header/navigation/Styled";





function Routes() {
    return (
        <Container>
            <Switch>
                <Route path="/curiosity" component={CuriosityImageList}/>
                <Route path="/opportunity" component={OpportunityImageList}/>
                <Route path="/spirit" component={SpiritImageList}/>
                <Route path="/details/:id" component={RoversDetailsPage}/>
                <Route path="/" component={Home} />
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Container>

    );
}

export default Routes;