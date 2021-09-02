import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom'
import NasaContext from "../../context/NasaContext";
import {ContentWrapper, DetailWrapper, ImmageWrappeer} from "./RoversDetailsStyled";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

function RoversDetailsPage() {
    const {id} = useParams()

    const {
        filteredCameras,
    } = useContext(NasaContext)

    return (
        <div>
            {filteredCameras
                .filter((list) => list.id.toString() === id.slice(1))
                .map(list =>
                    (
                            <DetailWrapper>
                                    <img src={list.img_src} alt='This is Mars'/>
                                <ContentWrapper>
                                    <h1>Rover name: {list.rover.name ?? 'not defined'}</h1>
                                    <h2>Camera: {list.camera.name ?? 'not defined'}</h2>
                                    <h3>Sol: {list.sol ?? 'not defined'}</h3>
                                    <h3>Earth date: {list.earth_date ?? 'not defined'}</h3>
                                    <h3>Landing date: {list.rover.landing_date ?? 'not defined'}</h3>
                                    <h3>Status: {list.rover.status ?? 'not defined'}</h3>
                                    <Link to={`/${list.rover.name.toLowerCase()}`}>
                                    <CardActions>
                                        <Button style={{
                                            color: 'aliceblue',
                                            fontSize: 'large',
                                            background: '#0b3d91'
                                        }}>
                                            GO BACK
                                        </Button>
                                    </CardActions>
                                    </Link>
                                </ContentWrapper>
                            </DetailWrapper>)
                )
            }
        </div>
    );
}

export default RoversDetailsPage;