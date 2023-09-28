// Generate the webpage
function generate() {
    if(myWindow != null) {
        myWindow.close();
    }

    // Generate the website title
    let firstName = document.getElementById("firstName").value;
    if (!firstName){
        alert("Please Enter First Name");
        return;
    }
    let lastName = document.getElementById("lastName").value;
    if (!lastName){
        alert("Please Enter Last Name");
        return;
    }
    let fontsize = document.getElementById("fontSize").value;
    let fontStyle = document.querySelector("input[type=radio][name=fontStyle]:checked").id;
    let fontColor = document.querySelector("input[type=radio][name=fontColor]:checked").id;
    let date = new Date().toLocaleDateString("de-DE");
    page += "<h1 style=\"font-size:" + fontsize + "px; font-family:" + fontStyle + "; color:" + fontColor + ";\"> Generate by " + firstName + " " + lastName + " on " + date + "</h1>";
    page += "<br>";

    // Generate the Website Links
    for (let i = 0; i < websiteCount; i++) {
        var websiteName = document.getElementById("websiteName" + i).value;
        var websiteAddress = document.getElementById("websiteAddress" + i).value;
        page += "<button onclick='window.open(" + "\"http://" + websiteAddress + "\")'>" + websiteName + "</button>";
    }

    // Create new window and open with "page"
    myWindow = window.open("", "ISP", width=1000, height=2000);
    myWindow.document.write(page);
}

// Button for adding WebsitePage
function addWebsite() {
    let table = document.getElementById("Websites");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "<input type=\"text\" id=\"websiteName" + websiteCount + "\" style=\"width: 50%;\">";
    cell2.innerHTML = "<input type=\"text\" id=\"websiteAddress" + websiteCount + "\" style=\"width: 50%;\">";
    websiteCount += 1;
}

// Button for removing WebsitePage
function deleteWebsite() {
    if (websiteCount == 1) {
        alert("You can't delete more row!");
        return;
    }
    document.getElementById("Websites").deleteRow(-1);
    websiteCount -= 1;
}
