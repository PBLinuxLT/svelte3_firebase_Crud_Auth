<script>
import {db} from './firestore.js';


export let id = '';
export let newUsername ='';
export let user = {};
export let editUser = false;

function editUserBox(user){
    editUser = !editUser;
    newUsername = user;
}

function deleteUser(id) {
        db.collection('users').doc(id).delete()
        .then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
}

function updateUserName(id){
    db.collection('users').doc(id).update({name:newUsername})
    .then(function(){
        console.log('document updated:', id, newUsername);
        newUsername = '';
        editUser = !editUser;
    }).catch(function(err){
        console.error('error updating name ', err);
    });
}

</script>

<div class="user">
 { #if !editUser }
    <h4 on:click={editUserBox(user.name)}>{`${user.name} is ${user.age} years old! , he works as a ${user.occupation}`}</h4>
   {:else}
    <input type="text" placeholder="new Name" bind:value={newUsername}><button on:click={updateUserName(id)}>Update</button>
    {/if}
    <button on:click={deleteUser(id)}>-X-</button>
</div>


<style>
    h4 {
        display:inline-block;
        cursor: pointer;
    }
</style>