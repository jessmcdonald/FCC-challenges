let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);


// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.