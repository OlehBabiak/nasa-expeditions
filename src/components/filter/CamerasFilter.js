import React, {useContext} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import NasaContext from "../../context/NasaContext";
import {camerasArray} from "../../constants";
import {FilterWrapper} from "./CamerasFilterStyled";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CamerasFilter() {

    const {selectCameraChangeHandler, selectedCamera, choiceSolHandler} = useContext(NasaContext)

    const classes = useStyles();

    return (
        <FilterWrapper>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Rover</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={selectedCamera}
                    onChange={selectCameraChangeHandler}
                    input={<BootstrapInput />}
                    style={{
                        background: 'white',
                        borderRadius: 4,
                    }}
                >
                    {camerasArray.map(camera=>
                        <option
                            key={camera.toString()}
                            value={camera}
                        >{camera}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>

            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-textbox">Sol</InputLabel>
                <BootstrapInput
                    id="demo-customized-textbox"
                    type='number'
                    placeholder='Enter SOL'
                    min='1'
                    step='1'
                    onChange={choiceSolHandler}
                />
            </FormControl>

        </FilterWrapper>
    );
}