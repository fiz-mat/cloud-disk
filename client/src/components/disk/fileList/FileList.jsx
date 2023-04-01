import React from 'react';
import './fileList.css'
import {useSelector} from "react-redux";
import File from "./file/File";

const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
    // const files = [{_id:1, name: 'direc', type: 'dir', size: '5gb', date: '01.04.2023'},
    //     {_id:1, name: 'direc2', type: 'jpg', size: '5gb', date: '01.04.2023'},].map(file => <File file={file} key={file.id}/>)

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;