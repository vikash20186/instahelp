<script>
	import RegisterComponent from './registration/Register.svelte'
	import LandingComponent from './home/Landing.svelte';
	import ErrorComponent from './error/Error.svelte';
	import { getUserInfo } from  './init/fetch-user-profile';

	let registerMode = false;
	let isloading = true;
	let userInfo;
	let error;

	getUserInfo().then(response => {
		if (response && response.status === 404){
			registerMode = true;
		} else {
			userInfo = response;
		}
	}).catch(err => {
		error = err;
	}).finally(() => {
		isloading = false;
	});

	function onRegistration(event){
		registerMode = false;
		userInfo = event.detail;
	}
   
</script>

<page>
	<actionBar title="InstaHelp" />
	{#if isloading}
		<stackLayout>
			<button text="Fetching user Details"/>
		</stackLayout>	
	{:else if userInfo} 
		<stackLayout>
			<LandingComponent userInfo= {userInfo}/>
		</stackLayout>
	{:else if error}
		<stackLayout>
			<ErrorComponent error={error}/>
		</stackLayout>
	{:else if registerMode}
		<stackLayout>
			<RegisterComponent on:success={onRegistration}/>
		</stackLayout>
	{/if}
</page>