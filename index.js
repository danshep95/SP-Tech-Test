const employeeDirectoryContainer = document.getElementById("employee-directory");

//Call JSON Data
let getData = new XMLHttpRequest();
getData.open('GET', 'data/data.json');

//Onload run create element function
getData.onload = function() {
    
    let employeeData = JSON.parse(getData.responseText);
    for (let i = 0; i < employeeData.length; i++) {
        //Container to hold employee information
        containerDiv = document.createElement("div");

        //Photo
        employeePhoto = document.createElement("img");
        employeePhoto.classList = "headshot"
        employeePhoto.src = employeeData[i].photo;

        //ID
        employeeID = document.createElement("p");
        employeeID.innerHTML = "<strong>ID: </strong>" + employeeData[i].id;

        //First & Last Name
        employeeName = document.createElement("p");
        employeeName.innerHTML = "<strong>Name: </strong>" + employeeData[i].first_name + " " + employeeData[i].last_name ;

        //Email Address
        employeeEmail = document.createElement("p");
        employeeEmail.innerHTML = "<strong>Email: </strong> <a href='mailto:" + employeeData[i].email+ "'>" + employeeData[i].email + "</a> ";

        //Gender
        employeeGender = document.createElement("p");
        employeeGender.innerHTML = "<strong>Gender: </strong>" + employeeData[i].gender;

        //IP Address
        employeeIPAddress = document.createElement("p");
        employeeIPAddress.innerHTML = "<strong>IP Address: </strong>" + employeeData[i].ip_address;

        //Employee indivial containers to main body
        employeeDirectoryContainer.append(containerDiv);

         //Append all created elements to main container
        containerDiv.append(
            employeePhoto, 
            employeeID, 
            employeeName, 
            employeeEmail, 
            employeeGender, 
            employeeIPAddress
            );
    }
    
};
getData.send()