
var firebaseConfig = {
  apiKey: "AIzaSyCFU1OjM0k92TwxMoZFJzVTsBt3ay87oyM",
  authDomain: "one-world-github-pages.firebaseapp.com",
  projectId: "one-world-github-pages",
  storageBucket: "one-world-github-pages.appspot.com",
  messagingSenderId: "385838863817",
  appId: "1:385838863817:web:64cedc14591327081f0418",
  measurementId: "G-TRDX1DL84J"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const auth = firebase.database();
function login() {
    const emailOrUsername = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(emailOrUsername, password)
        .then((userCredential) => {
            const user = userCredential.user;
          
        })
        .catch((error) => {
            console.error(error);
      
        });
}

// Signup function
function signup() {
  const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (password !== confirmPassword) {
      
        console.error("Passwords do not match");
      
        return;
    }

 auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      email : email,
      username : username,
   
    }


    database_ref.child('users/' + user.uid).set(user_data)
    alert('User Created')
  })
  .catch(function(error) {
   
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}
}


document.querySelector('#login button').addEventListener('click', login);
document.querySelector('#createAccount button').addEventListener('click', signup);

