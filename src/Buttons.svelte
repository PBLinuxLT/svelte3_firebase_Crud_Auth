<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function addOne (){
    dispatch('addOne');
}
function removeOne() {
    dispatch('removeOne');
}
</script>
<style>

button:hover {
		cursor: pointer;
	}
</style>
<button on:click="{addOne}">+ 1</button>
<button on:click="{removeOne}">- 1</button>