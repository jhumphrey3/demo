// Retrieve JSON data from file
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  // Check status
  if (this.readyState == 4 && this.status == 200) {
    // Convert text to JSON
    var jsonData= JSON.parse(this.responseText);
    console.log(jsonData);

    console.log(jsonData.devProfiles[4].name);

    document.querySelector("#myName").innerHTML = jsonData.devProfiles[4].imagePath;
    document.querySelector("#myName").innerHTML = jsonData.devProfiles[4].name;
    document.querySelector("#myMajor").innerHTML = jsonData.devProfiles[4].major;
    document.querySelector("#myEmail").innerHTML = jsonData.devProfiles[4].email;
    document.querySelector("#myGithubProfile").innerHTML = jsonData.devProfiles[4].githubProfile;
    document.querySelector("#myDescription").innerHTML = jsonData.devProfiles[4].description;
  
  }
};
xhttp.open("GET", "devs-data.txt", true);
xhttp.send();