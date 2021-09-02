import React, {useContext} from 'react';
import NasaContext from "../../../context/NasaContext";
import Button from '@material-ui/core/Button';
import {ButtonWrapper} from "./LoadMoreButtonStyled";

function LoadMoreButton() {

    const {
        showMoreHandler
    } = useContext(NasaContext)

    return (
        <ButtonWrapper>
            <Button onClick={showMoreHandler} variant="contained" color="primary" disableElevation>
                Load more
            </Button>
        </ButtonWrapper>
    );
}

export default LoadMoreButton;