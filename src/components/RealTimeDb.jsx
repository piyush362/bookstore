import React, { useState } from 'react'
import { db } from '../firebase-config.js'
import { uid } from 'uid'
import { set, ref } from 'firebase/database'

function RealTimeDb() {
    const [file, setFile] = useState('');

    //create
    const writeToDb = () => {
        const uiid = uid();
        set(ref(db, `${uiid}`), {
            uiid,
            file
        })
        setFile('')
    }
    //update
    //read
    //delete


    return (
        <div>
            <h1>hello</h1>
            <input type="text" onChange={(e) => setFile(e.target.value)} />
            <button onClick={writeToDb}>click</button>
        </div>
    )
}

export default RealTimeDb