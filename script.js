

/*document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent!<br>Thanks for completing the form. We','ll be in touch soon!');
            
        });
*/
$(document).ready(function(){
    $("#contact-form").submit(function(event){
        event.preventDefault();
        alert('Message sent');
    })
})