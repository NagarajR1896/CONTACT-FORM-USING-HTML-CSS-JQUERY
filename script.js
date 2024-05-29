

$(document).ready(function(){
    $("#contact-form").submit(function(event){
        event.preventDefault();
        alert("Message sent!\nThanks for completing the form. We'll be in touch soon!");
        this.reset();
    })
})
