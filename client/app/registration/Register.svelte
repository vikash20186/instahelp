<script>
    let phoneNumber;
    function onButtonTap(){
        alert('Registered');
    }
</script>

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
    
    <textField bind:text="{phoneNumber}" />
	
    <button text="Register" on:tap="{onButtonTap}" />