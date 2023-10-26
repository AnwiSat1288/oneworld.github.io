
const firebaseConfig = {
  apiKey: "AIzaSyCFU1OjM0k92TwxMoZFJzVTsBt3ay87oyM",
  authDomain: "one-world-github-pages.firebaseapp.com",
  databaseURL: "https://one-world-github-pages-default-rtdb.firebaseio.com",
  projectId: "one-world-github-pages",
  storageBucket: "one-world-github-pages.appspot.com",
  messagingSenderId: "385838863817",
  appId: "1:385838863817:web:64cedc14591327081f0418",
  measurementId: "G-TRDX1DL84J"
};

firebase.initializeApp(firebaseConfig);


const nameInput = document.getElementById('name');
const hasAllergiesCheckbox = document.getElementById('hasAllergies');
const hasFoodRestrictionCheckbox = document.getElementById('hasFoodRestriction');
const ethnicitySelect = document.getElementById('ethnicity');
const ageInput = document.getElementById('age');
const addressInput = document.getElementById('address');
const updateProfileButton = document.getElementById('updateProfileButton');
const profileSuccessMessage = document.getElementById('profileSuccessMessage');

updateProfileButton.addEventListener('click', updateProfile);

function updateProfile() {

    const user = firebase.auth().currentUser;

    const name = nameInput.value;
    const hasAllergies = hasAllergiesCheckbox.checked;
    const hasFoodRestriction = hasFoodRestrictionCheckbox.checked;
    const ethnicity = ethnicitySelect.value;
    const age = ageInput.value;
    const address = addressInput.value;

    user.updateProfile({
        displayName: name,
        photoURL: age
    }).then(() => {
     
        const userProfileData = {
            hasAllergies: hasAllergies,
            hasFoodRestriction: hasFoodRestriction,
            ethnicity: ethnicity,
            age: age,
            address: address
        };

        firebase.database().ref('users/' + user.uid + '/profile').set(userProfileData)
            .then(() => {
                const successMessage = 'Profile updated successfully.';
                displayProfileSuccessMessage(successMessage);
            })
            .catch((error) => {
                console.error(error);
            });
    }).catch((error) => {
        console.error(error);
    });
}

function displayProfileSuccessMessage(message) {
    profileSuccessMessage.className = 'form__message form__message--success';
    profileSuccessMessage.textContent = message;
}
