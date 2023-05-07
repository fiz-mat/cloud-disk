import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {creatDir, getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css'
import Popup from "./Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    // function creatDirHandler() {
    //     // dispatch(creatDir(creatDir, 'sdvsv fsvs'))
    //     dispatch(setPopupDisplay('flex'))
    // }
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
                {currentDir && <button className="disk__back" onClick={()=> backClickHandler()}>Назад</button>}
            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};

export default Disk;