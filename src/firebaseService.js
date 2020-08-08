// import firebase from './firebase'
// import 'firebase/firestore'

// export const CHAT_ROOM_COLLECTION = 'chat_rooms'
// export const MESSAGES_COLLECTION = 'messages'

// const db = firebase.firestore()

// export const createMessageCollection = roomId => {
//   const ref = db
//     .collection(CHAT_ROOM_COLLECTION)
//     .doc(roomId)
//     .collection(MESSAGES_COLLECTION)
//     .doc()

//   try {
//     ref.set({})
//   } catch (error) {
//     console.error('Error creating message collection', error)
//   }
// }

// export const createMessage = (roomId, val) => {
//   const ref = db
//     .collection(CHAT_ROOM_COLLECTION)
//     .doc(roomId)
//     .collection(MESSAGES_COLLECTION)
//     .doc()

//   try {
//     ref.set(val)
//   } catch (error) {
//     console.error('Error adding message', error)
//   }
// }

// export const createChatRoom = roomId => {
//   const ref = db.collection(CHAT_ROOM_COLLECTION).doc(roomId)

//   try {
//     ref.set({})
//     createMessageCollection(roomId)
//   } catch (error) {
//     console.error('Error creating chat room', error)
//   }
// }

// export const fetchMessages = (roomId, callback) => {
//   const ref = db
//     .collection(CHAT_ROOM_COLLECTION)
//     .doc(roomId)
//     .collection(MESSAGES_COLLECTION)

//   try {
//     ref.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
//       const messages = snapshot.docs.map(snap => snap.data())

//       callback(messages)
//     })
//   } catch (error) {
//     console.error('Error fetching messages', error)
//   }
// }
