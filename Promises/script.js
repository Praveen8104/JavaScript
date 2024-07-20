var x = new Promise(function (Accept, Reject) {
    var x = 10;
    if (x < 10) {
        Accept("Success");
    }
    else {
        Reject("Error");
    }
})

x.then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
})