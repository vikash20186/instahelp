<script>
    import { sendGenerateOtpRequest, verifyPhoneRequest } from "./register.service";
	import { createEventDispatcher } from 'svelte';

    let phoneNumber, otp;
    let enterOtpMode = false;
    async function onRegister(){
        if (!phoneNumber){
            alert('Phone numbre missing');
        }

        try {
            const result = await sendGenerateOtpRequest(phoneNumber);
            
            if (result && result.message === 'SENT'){
                enterOtpMode = true;
            }
        } catch (err){
            console.log(" ::::::::::: error", err);
        }
    }

    async function verifyPhone(){
        if (!otp){
            alert('OTP is missing');
        }

        try {
            const result = await verifyPhoneRequest(otp, phoneNumber);
            console.log(result);
            if (result && result.phone === phoneNumber){
                const dispatch = createEventDispatcher();
                dispatch('success', result);
            } else if (result && result.status === 404){
                alert("OTP didnt match. Please try again or use resend option");
            }
        } catch (err){
            console.log(" ::::::::::: error", err);
        }
    }

    function handleResend(){
        otp = undefined;
        enterOtpMode = false;
    }


</script>

    {#if !enterOtpMode} 
        <label textWrap="{true}">
            <formattedString>
            <span text="Register Here"/>
            </formattedString>
        </label>
        
        <label textWrap="{true}">
            <formattedString>
            <span text="Enter your phone number to register"/>
            </formattedString>
        </label>
        
        <textField bind:text="{phoneNumber}" keyboardType="phone"/>
        
        <button text="Register" on:tap="{onRegister}" />
    {:else}
        <label textWrap="{true}">
            <formattedString>
            <span text="Please enter OTP which was was sent to {phoneNumber}."/>    
            </formattedString>
        </label>
        <button text="Resend OTP" on:tap="{handleResend}" />
        
        <textField bind:text="{otp}" keyboardType="number"/>
        
        <button text="Verify Phone" on:tap="{verifyPhone}" />
    {/if}