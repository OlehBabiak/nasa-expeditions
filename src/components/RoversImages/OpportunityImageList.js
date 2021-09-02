import React, {useContext, useEffect} from 'react';
import NasaContext from "../../context/NasaContext";
import CamerasFilter from "../filter/CamerasFilter";
import {ImageListWrapper} from "./ListsStyled";
import RenderedContent from "./RenderedContent";

function OpportunityImageList() {

    const {
        fetchData,
        sol,
        OPPORTUNITY,
        setLoadedItemNumber,
    } = useContext(NasaContext)

    useEffect(() => {
        fetchData(OPPORTUNITY, sol)
        setLoadedItemNumber(10)
    }, [sol])

    return (
        <ImageListWrapper>
            <CamerasFilter/>
            <RenderedContent/>
        </ImageListWrapper>
    );
}

export default OpportunityImageList;