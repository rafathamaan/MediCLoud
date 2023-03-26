const firebaseConfig = {
    apiKey: "AIzaSyCqotKaGRV0QLF2-ELqUePq9SmWHof7-mU",
    authDomain: "medicloud-cf97e.firebaseapp.com",
    databaseURL: "https://medicloud-cf97e-default-rtdb.firebaseio.com",
    projectId: "medicloud-cf97e",
    storageBucket: "medicloud-cf97e.appspot.com",
    messagingSenderId: "1009975418836",
    appId: "1:1009975418836:web:8bfbb2eaa71926dff14041"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var age = getElementVal("age");
  var Addressx = getElementVal("Addressx");
  var medicalrpt = getElementVal("medicalrpt");
  var medications = getElementVal("medications");

  saveMessages(name, emailid, msgContent, age, Addressx, medicalrpt, medications);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent, age, Addressx, medicalrpt, medications) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    age: age,
    Addressx: Addressx,
    medicalrpt: medicalrpt,
    medications: medications,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};