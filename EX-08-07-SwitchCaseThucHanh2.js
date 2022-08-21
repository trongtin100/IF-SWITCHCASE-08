let login = prompt ("Enter:");
let message = (login == "employee")?
    "hello":
    (login == "director")?
        "greetings":
        (login=="")?
            "no login":
            "";
alert(message);

