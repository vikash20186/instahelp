<frame id="detail-page-frame">
	<page>
		<label text="Detail Page {msg}" on:tap="{closeModal}"/>
        
	</page>
</frame>

<script>
    import { closeModal } from "svelte-native";
    
    export let msg;



</script>

<style>
    label{
        color: red;
        position: absolute;
        top: 0;
        border: solid 1px;
        background-color: blue;
    }

    button{
        background-color: red;
    }
</style>