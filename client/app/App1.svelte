<page>
	<actionBar title="Master" />
	<stackLayout>
		<button text="To Details directly {deviceId}" on:tap="{showDetailWithProps}" />
	</stackLayout>
</page>

<script>
    //import { DeviceInfo } from "nativescript-dna-deviceinfo";
	import DetailPage from './Detail.svelte'
	import { showModal } from 'svelte-native'

	function showDetailWithProps() {
		showModal({ page: DetailPage, props: { msg: 'hi' }, fullscreen: true })
	}

	const deviceId = 'temp';

   // const deviceId = DeviceInfo.deviceId();
</script>