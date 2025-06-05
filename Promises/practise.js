// Just a place to practice promises in JavaScript

function test(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      setTimeout(() => {
        resolve({
          message: "Promise resolved successfully!",
          timestamp: new Date().toISOString(),
        });
      }, 500);
    } else {
      reject("Promise rejected!");
      // the below console.log will also gets executed even after the promise is rejected
      // If you want to avoid this, you can add return to the reject statement
      console.log("After promise reject....");
    }
  });
}

test(false)
  .then((result) => {
    console.log("I am in then block");
    console.log(result.message);
    console.log(result.timestamp);
  })
  .catch((error) => {
    console.log("I am in catch block");
    console.error(error);
  });
