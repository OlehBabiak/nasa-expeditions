import React, {useContext, useState} from 'react';
import RoversPage from "../RoversPage";
import NasaContext from "../../../context/NasaContext";
import {GridWrapper} from "./FilteredImageStyled";


function FilteredImgs() {
    const {
        visibleRenderArray,
    } = useContext(NasaContext)

    return (
        <GridWrapper>
            {visibleRenderArray.map((roverPhoto) =>
                <RoversPage
                    roverPhoto={roverPhoto}
                    key={roverPhoto.id}
                />
            )}
        </GridWrapper>
    );
}

export default FilteredImgs;