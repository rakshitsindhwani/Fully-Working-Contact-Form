function sendemail(){


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;



    Email.send({
        // Host : "smtp.elasticemail.com",
        // Username : "rakshitsindhwani@birlainstitute.co.in",
        // Password : "6328E4B147A226AD750A570E08407EF09C0C",
        SecureToken: "df1c8c6a-92b1-460c-b042-d26c0c9226bb" ,
        To : "rakshitsindhwani60@gmail.com",
        From : "rakshitsindhwani@birlainstitute.co.in",
        Subject : "MAIL FROM CONTACT FORM ",
        Body : "Name: " + name + "<br/> Email: " + email + "<br/> Contact Number: " + phone + "<br/> Message: " + message 
    }).then(
      message => alert("Sent Succesfully")
    );
}