// Initialize Firebase with your configuration
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// login function
function login() {
  const email = document.querySelector('#login input[type="text"]').value;
  const password = document.querySelector('#login input[type="password"]').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in as:', user.email);
    
    })
    .catch((error) => {
   
      console.error(error);
  
    });
}

// Function to handle signup
function signup() {
  const email = document.querySelector('#createAccount input[placeholder="Email Address"]').value;
  const password = document.querySelector('#createAccount input[placeholder="Password"]').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user;
      console.log('User created:', user.email);
     
    })
    .catch((error) => {
   
      console.error(error);

    });
}

// Event listeners for login and signup forms
document.querySelector('#login button').addEventListener('click', login);
document.querySelector('#createAccount button').addEventListener('click', signup);
