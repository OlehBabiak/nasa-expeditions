import React, {useState} from 'react';
import NasaContext from "./NasaContext";
import {url, rovers, key, camerasArray} from "../constants"

function NasaContextProvider({children}) {

    const {api} = url
    const {CURIOSITY, OPPORTUNITY, SPIRIT} = rovers
    const api_key = key
    const roversArr = []

    for (let roversKey in rovers) {
        roversArr.push(rovers[roversKey])
    }

    const [roverImageArray, setRoverImageArray] = useState([]);
    const [sol, setSol] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRover, setSelectedRover] = useState(roversArr[0]);
    const [selectedCamera, setSelectedCamera] = useState(camerasArray[0]);
    const [loadedItemNumber, setLoadedItemNumber] = useState(10);


    const urlBuilder = (api, rover, sol, api_key) => `${api}/${rover}/photos?sol=${sol}&api_key=${api_key}`

    const fetchData = async (rover, sol) => {
        setIsLoading(true)
        const resp = await fetch(urlBuilder(api, rover, sol, api_key))
        const json = await resp.json()
        const {photos} = json
        setRoverImageArray(photos)
        setIsLoading(false)
    }

    const choiceSolHandler = (e) => {
        setSol(e.target.value)
    }

    const changeRover = (rover) => {
        setSelectedRover(rover)
    }

    const selectCameraChangeHandler = (e) => {
        setSelectedCamera(e.target.value)
    }

    const filteredCameras = roverImageArray.filter(el => {
        return el.camera.name === selectedCamera
    });

    const visibleRenderArray =  [...filteredCameras.slice(0,loadedItemNumber)]


    const showMoreHandler = () => {
        if(filteredCameras.length === visibleRenderArray.length){return}
        setLoadedItemNumber(loadedItemNumber + 5)
    }

    return (
        <NasaContext.Provider value={{
            roverImageArray,
            setRoverImageArray,
            api_key,
            CURIOSITY,
            OPPORTUNITY,
            SPIRIT,
            sol,
            fetchData,
            setSol,
            isLoading,
            choiceSolHandler,
            roversArr,
            selectedRover,
            changeRover,
            selectCameraChangeHandler,
            selectedCamera,
            filteredCameras,
            showMoreHandler,
            visibleRenderArray,
            setLoadedItemNumber
        }}>
            {children}
        </NasaContext.Provider>
    );
}

export default NasaContextProvider;