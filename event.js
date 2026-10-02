setTimeout(function() {
    console.log("This message is displayed after 3 seconds");
}, 3000);


function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Reem", sayGoodbye);


const promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }

});
/*promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });*/

async function getData() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}