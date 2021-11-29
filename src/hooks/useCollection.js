import {collection, onSnapshot} from 'firebase/firestore'
import {useEffect, useState} from 'react';
import {db} from '/src/firebase/config'

export const useCollection = (collectionName) => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        console.log('Line: 10', db)

        let ref = collection(db, collectionName)
        console.log('Line: 11', ref)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setUsers(results)
        })

        return () => unsub()
    }, [collectionName])

    return {users}
}