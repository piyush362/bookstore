import React, { useState } from 'react'
import { db } from '../firebase-config.js'
import { uid } from 'uid'
import { set, ref } from 'firebase/database'

export const updateDb = async (data) => {
    const uiid = uid();
    const fileRef = ref(db, `${uiid}`);
    await set(fileRef, data);
    // alert('db update..')
}