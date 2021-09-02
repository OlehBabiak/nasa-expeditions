import React, {useContext, useEffect} from 'react';
import NasaContext from "../../context/NasaContext";
import NotFound from "../NotFound/NotFound";
import FilteredImgs from "./Filter/FilteredImgs";
import CamerasFilter from "../filter/CamerasFilter";
import {ImageListWrapper, LoaderWrapper} from "./ListsStyled";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import Loader from "react-loader-spinner";

function CuriosityImageList() {

    const {
        filteredCameras,
        fetchData,
        sol,
        CURIOSITY,
        isLoading,
        visibleRenderArray,
        setLoadedItemNumber
    } = useContext(NasaContext)

    useEffect(() => {
        fetchData(CURIOSITY, sol)
        setLoadedItemNumber(10)
    }, [sol])


    return (
        <ImageListWrapper>
            <CamerasFilter/>
            {
                !isLoading
                    ?filteredCameras.length
                ?<FilteredImgs/>
                    :<NotFound code={404} text={'Unfortunately, the rover did not take a photo that day...'}/>
                    :<LoaderWrapper><Loader type="Circles" color="#0b3d91" height={80} width={80}/></LoaderWrapper>
            }
            {visibleRenderArray.length < filteredCameras.length && <LoadMoreButton/>}
        </ImageListWrapper>
    );
}

export default CuriosityImageList;