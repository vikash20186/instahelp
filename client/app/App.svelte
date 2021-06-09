<script>
    import {Device, Http} from '@nativescript/core';
	import {BASE_URL} from './shared/constant';
	
	const deviceId = Device.uuid;
	const url = `${BASE_URL}/api/users/byDevice/${deviceId}`;
	const userInfo$ = Http.getJSON(url);

   
</script>


<page>
	<actionBar title="Master" />

	{#await userInfo$}
		<stackLayout>
			<button text="Fetching user Details for {url}"/>
		</stackLayout>	
	{:then userInfo} 
		<stackLayout>
			<button text="Got the response {userInfo.phone}"/>
		</stackLayout>
	{:catch error}
		<stackLayout>
			<textView text="error {url}" />
		</stackLayout>
	{/await}
	<textView text="outside {url}" />
</page>