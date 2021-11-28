import * as React from 'react'
import {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '/src/firebase/config'

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