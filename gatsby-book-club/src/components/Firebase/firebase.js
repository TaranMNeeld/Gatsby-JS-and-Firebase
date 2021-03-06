import firebaseConfig from "./config";
import axios from 'axios';

class Firebase {
  constructor(app) {
    if(!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  async getUserProfile({userId}) {
    return this.db.collection('publicProfiles').where('userId', '==', userId).get()
  }

  async register({username, email, password}) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
    return this.db.collection('publicProfiles').doc(username).set({
      userId: newUser.user.uid
    })
  }

  async login({email, password}) {
    localStorage.setItem('editing', false)
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut();
  }

  subscribeToBookComments({bookId, onSnapShot}) {
    const bookRef = this.db.collection('books').doc(bookId)
    console.log(bookRef)
    return this.db.collection('comments').where('book', '==', bookRef).onSnapShot(onSnapShot)
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if(!firebaseInstance && app){
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
  }else if(firebaseInstance){
    return firebaseInstance
  }else{
    return null;
  }
}

export default getFirebaseInstance;
