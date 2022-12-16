import "./App.css";
import { Firebase } from "./firebase/Config";

function App() {
  return (
    <div className="App">
      {/* Get data from firestore (Read) */}

      <button
        onClick={() => {
          Firebase.firestore()
            .collection("Users")
            .get()
            .then((snapshot) => {
              snapshot.forEach((obj) => {
                console.log(obj.data(), obj.id);
              });
            });
        }}
      >
        {" "}
        Get User Collection
      </button>

      <hr />

      <button
        onClick={() => {
          Firebase.firestore()
            .collection("products")
            .get()
            .then((snapshot) => {
              snapshot.forEach((obj) => {
                console.log(obj.data());
              });
            });
        }}
      >
        Get Products Collection
      </button>

      <hr />

      {/* Add data (Create) */}

      <button
        onClick={() => {
          Firebase.firestore().collection("Users").add({
            Name: "Kumar",
            age: 20,
          });
        }}
      >
        {" "}
        Add to Collection
      </button>

      <hr />

      {/* Delete */}

      <button
        onClick={() => {
          Firebase.firestore()
            .collection("products")
            .doc("L43rnZt2elqoFphmGKeo")
            .delete()
            .then(() => {
              console.log("deleted successfully");
            });
        }}
      >
        {" "}
        Delete doc
      </button>

      <hr />

      {/* update */}

      <button
        onClick={() => {
          Firebase.firestore()
            .collection("products")
            .doc("goRoZuE3EoSGVbwAykS5")
            .set({
              name: "Apple iphone",
              price: 25000,
              type: "mobiles",
            });
        }}
      >
        Update
      </button>

      {/* AUTHENTICATION */}

      {/* Sign in */}
      <button
        onClick={() => {
          Firebase.auth()
            .createUserWithEmailAndPassword("hari@gmail.com", "hari@12345")
            .then((userCredential) => {
              var user = userCredential.user;
            });
        }}
      >
        {" "}
        auth
      </button>
    </div>
  );
}

export default App;
