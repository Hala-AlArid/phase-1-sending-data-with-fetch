const Data = {
    name: "Steve",
    email: "steve@steve.com",
  };
 
//   send data

 const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(Data),
  };
  

    function submitData(name, email){

        return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          console.log(object);
          object.name = name;
          object.email = email;
        })
        .catch(function (error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
    }

      

