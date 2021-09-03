import React, {useContext} from 'react';
import {ErrorWrapper, LoaderWrapper} from "./ListsStyled";
import Loader from "react-loader-spinner";
import FilteredImgs from "./Filter/FilteredImgs";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import NasaContext from "../../context/NasaContext";
import NotFound from "../NotFound/NotFound";
import sorry from "../../assets/istockphoto-1161140457-170667a.jpg";

function RenderedContent() {

    const {
        filteredCameras,
        isLoading,
        visibleRenderArray,
        error
    } = useContext(NasaContext)

    return (
        <div>
            {error &&
            <ErrorWrapper>
                <img src={sorry} alt="404"/>
                <p>{error}</p>
            </ErrorWrapper>}
            {!isLoading &&
            <LoaderWrapper><Loader type="Circles" color="#0b3d91" height={80} width={80}/></LoaderWrapper>}
            {!filteredCameras.length &&
            <NotFound text={'Unfortunately, the rover did not take a photo that day'}/>}
            {<FilteredImgs/>}
            {visibleRenderArray.length < filteredCameras.length && <LoadMoreButton/>}
        </div>
    );
}

export default RenderedContent