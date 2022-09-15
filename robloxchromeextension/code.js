window.addEventListener("load", function () {
    if (document.querySelector("span.tooltip-pastnames") !== null){ 
        var prevnames = document.querySelector("span.tooltip-pastnames").getAttribute("data-original-title").split(", ");
        var usernameusernames = 'Username'
        if (prevnames.length > 1){
            usernameusernames = 'Usernames'
        }
        document.querySelector("span.text-pastname").innerHTML = '<span style="color: #808080;">'+ prevnames.length +' Previous '+ usernameusernames +'</span> <span style="color: #666699;">|</span> <span style="color: #339966;">R$ '+ prevnames.length +'000</span>'
}
  });
