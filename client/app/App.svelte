<page>
	<actionBar title="Master" />
	<stackLayout>
		<button text="To Details directly {deviceId}" on:tap="{showDetailWithProps}" />
	</stackLayout>
</page>

<script>
    import {Device} from '@nativescript/core';
	import DetailPage from './Detail.svelte'
	import { showModal } from 'svelte-native'

	function showDetailWithProps() {
		showModal({ page: DetailPage, props: { msg: 'hi' }, fullscreen: true })
	}

	 let deviceId = '';
	 if (global.isIOS) {
		deviceId = "";
	// 	console.log(UIDevice);
	// 	debugger;
	 	//deviceId = "1.. " + (Device.uuid === undefined);
	 	deviceId += Device.uuid;
	 }

	//const deviceId = 'temp';

   
</script>