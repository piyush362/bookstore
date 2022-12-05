import { useState } from 'react';
import { storage } from '../firebase-config.js'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from 'firebase/storage';
import { set } from 'firebase/database'
import { db } from '../firebase-config.js'
import { uid } from 'uid'
import styled from 'styled-components';
import { updateDb } from './UpdateDB'

function FileUpload() {

    const [fileUpload, setFileUpload] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [dbtoggle, setdbtoggle] = useState(true);

    // state to put on db ================================
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('');
    const [bookType, setBookTypes] = useState('books');
    const [adminPassword, setAdminPassword] = useState('')
    // ======================================================

    const uploadDataToDb = async () => {
        const uiid = uid();
        const data = {
            id: uiid,
            title: title,
            description: description,
            bookType: bookType,
            fileUrl: fileUrl
        }
        // const fileRef = ref(db, `${uiid}`);
        // await set(fileRef, data);
        await updateDb(data);
        alert("db update")
        setTitle('')
        setDescription('')
        setFileUrl('')
        setBookTypes('')
        setFileUpload(null)
    }

    // upload file=========================
    const uploadFile = async () => {
        if (fileUpload == null) return
        setLoading(false)
        const tempUrl = "";
        const fileRef = ref(storage, `${bookType}/${fileUpload.name}`);
        await uploadBytes(fileRef, fileUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setFileUrl(url);
            })
        })
        alert('uploaded file successfully ....')
        setLoading(true)
        // await uploadDataToDb();

    }

    const clearField = () => {
        setTitle('')
        setDescription('')
        setFileUrl('')
        setBookTypes('')
        setFileUpload(null)
    }
    return (
        <UploadFile>
            <Box>
                <label for="cars">Choose Books Type:</label>
                <select id="cars" name="cars" onChange={(e) => setBookTypes(e.target.value)}>
                    <option value="books" selected>Books</option>
                    <option value="notes">Notes</option>
                    <option value="quantum">Quantum</option>
                </select>

                <input type="file" onChange={(e) => setFileUpload(e.target.files[0])}
                />

                <input type="text" placeholder='Enter Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input type="text" placeholder='description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                {/* <input type="text" placeholder='admin password'
                    onChange={(e) => setAdminPassword(e.target.value)}
                /> */}
                {!loading && <p>Big file.. wait..UpLoading...</p>}
                <button onClick={uploadFile}>Upload file</button>
                <button onClick={uploadDataToDb}>Update database</button>
                {/* <button onClick={clearField} style={{ backgroundColor: 'red' }}>Clear all field </button> */}
            </Box>


        </UploadFile>
    )
}

const UploadFile = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`;
const Box = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & input {
        margin: 10px 0;
        padding: 10px;
        border: 2px solid black;
        border-radius: 5px;
    }
    & label{
        margin-bottom: 10px;
        padding: 10px;
    }
    & select {
        padding: 10px;
        border: 2px solid black;
        border-radius: 5px;
    }
    & option{
        padding: 10px;
    }
    & button {
        padding: 10px;
        margin-top: 10px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
`;


export default FileUpload