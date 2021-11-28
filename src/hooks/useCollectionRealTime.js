import {useState, useEffect} from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '/src/firebase/config'

export const useCollectionRealTime = (c) => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        let ref = collection(db, c)
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
    }, [c])

    return {users}
}
