// import { useEffect, useState } from "react"
// import {auth} from '/src/firebase/config'
// import {collection, onSnapshot} from 'firebase/firestore'
//
// export const useDocument = (collectionName, id) => {
//     const [document, setDocument] = useState(null)
//     const [error, setError] = useState(null)
//
//     // realtime document data
//     useEffect(() => {
//         const ref = collection(auth, collectionName, id)
//
//         const unsubscribe = onSnapshot(ref,snapshot => {
//             // check doc exists & has data
//             if(snapshot.data()) {
//                 setDocument({...snapshot.data(), id: snapshot.id})
//                 setError(null)
//             }
//             else {
//                 setError('No such document exists')
//             }
//         }, err => {
//             console.log(err.message)
//             setError('failed to get document')
//         })
//
//         // unsubscribe on unmount
//         return () => unsubscribe()
//
//     }, [collectionName, id])
//
//     return { document, error }
// }