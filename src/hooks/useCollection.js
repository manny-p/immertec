import {useState, useEffect} from 'react'
import {db} from '/src/lib/firebase'

import {collection, getDocs} from 'firebase/firestore'
import * as React from 'react';

export const useCollection = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {

        const ref = collection(db, 'users')
        console.log('Line: 13', ref)

        getDocs(ref)
            .then((snapshot) => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setUsers(results)
            })
    }, [])

    return {users}
}













// const unsubscribe = onSnapshot(ref, (snapshot) => {
//     let results = []
//     snapshot.docs.forEach(doc => {
//         results.push({...doc.data(), id: doc.id,})
//     })
//     setDocuments(results)
// })
//
// return () => unsubscribe()
//
// }, [collectionName]
// )
//
// return {documents}