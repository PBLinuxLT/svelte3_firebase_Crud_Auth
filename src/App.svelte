<script>
	import {db} from './firestore.js';
	import firebase from 'firebase/app';
	import 'firebase/auth';
	import User from './user.svelte';

	let users = [];
	let newUser = {
		name:'',
		age:'',
		occupation: ''
	}

	let userEmail = '';
	let authEmail ='';
	let userPw = '';
	let userLoggedIn = false;

	firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log('User logged In');
		userLoggedIn = true;
		authEmail = user.email;
	} else {
		console.log('No User logged In');
		userLoggedIn = false;
	}
	});

	function createAccount(){

	// Create User
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPw)
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	
	});

	}

	

	function signIn(){

	//Login User
	firebase.auth().signInWithEmailAndPassword(userEmail, userPw)
	.catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
	});

	}
	

	function signOut(){

	// Logout User
	firebase.auth().signOut().then(function() {
	// Sign-out successful.
	}).catch(function(error) {
	console.log('DB Error:', error);
	});

	}
	
	
	db.collection('users').orderBy("name").onSnapshot(data => {
		users = data.docs;
	});


	function addNewUser(){
		db.collection('users').add(newUser)
		
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
		newUser = {
			name:'',
			age:'',
			occupation: ''
		}
	}

	

</script>

<main>
	<h1>FireStore Demo</h1>
	{#if userLoggedIn }
		<input type="text" bind:value={newUser.name} placeholder="Name">
		<input type="text" bind:value={newUser.age} placeholder="Age">
		<input type="text" bind:value={newUser.occupation} placeholder="Occupation">
		<button on:click={addNewUser}>Add New User</button>

		{#each users as user}
		<User id={user.id} user={user.data()}/>
		{/each}
		{:else}
		<h6>Please Sign In to Continue..</h6>
	{/if}
</main>

{#if !userLoggedIn }
	<section id="userDetails">
		<input type="text" bind:value={userEmail} placeholder="Enter Email Address">
		<input type="password" bind:value={userPw} placeholder="Enter Your Password">
		<button on:click={createAccount}>Register New Account</button><button on:click={signIn}>Sign In</button>
	</section>
{:else}
<p class="signedIn">User: {authEmail} -- <span on:click={signOut}>Sign Out</span></p>
{/if}

<style>
p.signedIn span {
	cursor: pointer;
	color:blueviolet;
}
</style>