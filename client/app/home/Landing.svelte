<label textWrap="{true}">
    <formattedString>
      <span text="Welcome to InstaHelp :)"/>
      <span text="Phone: {userInfo.phone}"/>
    </formattedString>
</label>


<script>
    
    import { WebRTC } from 'nativescript-webrtc-plugin';
    
    export let userInfo;
    
    
    async function placeCall(){
      const webrtc = new WebRTC({
          enableAudio: true,
          enableVideo: true
      });

      let localStream;

      console.log("---------------------------------> WebRTC.hasPermissions()");
      console.log("---------------------------------> WebRTC.hasPermissions()", WebRTC.hasPermissions());

        if (WebRTC.hasPermissions()) {
              localStream = await this.webrtc.getUserMedia(4);
              console.log("::", localStream);
        } else {
            try {
                await WebRTC.requestPermissions();
                if (WebRTC.hasPermissions()) {
                    localStream = await this.webrtc.getUserMedia(4);
                    console.log(localStream);
                }
            } catch (e) {
              console.log(e);
            }
        }
    }

      placeCall().catch(err => console.log(" :::::::::::::: ", err));
      console.log(" --------------------------------> starting sample")

</script>