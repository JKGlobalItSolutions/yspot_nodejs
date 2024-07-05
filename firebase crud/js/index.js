var firebaseConfig = {
  apiKey: "AIzaSyCp2e7CNo83HwDx_HAVgY_IDh0_KW2Y0HI",
  authDomain: "y-spot-e84ca.firebaseapp.com",
  databaseURL: "https://y-spot-e84ca-default-rtdb.firebaseio.com",
  projectId: "y-spot-e84ca",
  storageBucket: "y-spot-e84ca.appspot.com",
  messagingSenderId: "783996806068",
  appId: "1:783996806068:web:298ca1ddb4dfb7e758c8e1",
  measurementId: "G-TSH2JVYJHR",
};
//   Initialize firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL

$("#btn-login").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();
  if (email != "" && password != "") {
    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    result.catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message:" + errorMessage);
    });
  } else {
    window.alert("Form is incomplete. Please fill out all fields.");
  }
});
