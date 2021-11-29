import {useState, useEffect} from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '/src/firebase/config'

export const useCollection = (c) => {

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


// export const useCollection = () => {
//
//     const [users, setUsers] = useState(null)
//
//     useEffect(() => {
//         const ref = collection(db, 'users')
//         console.log('Line: 13', ref)
//
//         getDocs(ref)
//             .then((snapshot) => {
//                 let results = []
//                 snapshot.docs.forEach(doc => {
//                     results.push({id: doc.id, ...doc.data()})
//                 })
//                 setUsers(results)
//             })
//     }, [])
//
//     return {users}
// }
