const account = [
    {
        email: "hi@gmail.com",
        password: "12345",
    },
    {
        email: "hello@gmail.com",
        password: "12345",
    },
    {
        email: "bye@gmail.com",
        password: "12345",
    }
]
function check() {
    event.preventDefault();
    var email = document.getElementById('emailID').value;
    var password = document.getElementById('passwordID').value;
    if(email == "" || password == "") {
        alert("Username | Password not be blank");
        return false;
    } else {
        let i=0;
        let checkuser=0;
        let checkall=0;
        for(i=0; i< account.length;i++) {
            if(account[i].email == email && account[i].password == password) {
                alert("Login successful");
                checkall=1;
            } if(account[i].email == email && account[i].password !== password) {
                alert("Invalid")
                checkuser=1;
            }  
        } if(checkall==0 && checkuser==0) {
            alert("Account not found");
        }
    }
} 


