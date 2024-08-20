//find the address of "bob brown"
//filter and find methods


let emails = {
    "emails": [
        {
            "name": "John Doe",
            "address": "john.doe@example.com"
        },
        {
            "name": "Jane Smith",
            "address": "jane.smith@domain.com"
        },
        {
            "name": "Alice Johnson",
            "address": "alice.johnson@anotherdomain.com"
        },
        {
            "name": "Bob Brown",
            "address": "bob.brown@sample.org"
        },
        {
            "name": "Bob Brown",
            "address": "bobby.brown@testdev.org"
        },
        {
            "name": "Eve White",
            "address": "eve.white@test.net"
        }
    ]
}

let emailFilter = emails.emails.filter(function (email) {
    return email.name === "Bob Brown";
});

console.log(emailFilter)

