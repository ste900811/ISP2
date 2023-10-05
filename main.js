// Generate the webpage
function generate() {
    let animalX = 10;
    console.log("check1", typeof(animalX) , animalX);
    let animalY = 0;
    if(myWindow != null) {
        myWindow.close();
        page = "";
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
    let colorRed = document.getElementById("colorRed").value;
    let colorGreen = document.getElementById("colorGreen").value;
    let colorBlue = document.getElementById("colorBlue").value;
    let date = new Date().toLocaleDateString("de-DE");
    animalX = parseFloat(animalX) + parseFloat(fontsize);
    console.log("check2", typeof(animalX) , animalX);
    page += "<body><h1 style=\"font-size:" + fontsize + "px; font-family:" + fontStyle + "; color:rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ");\"> Generate by " + firstName + " " + lastName + " on " + date + "</h1>";
    animalX = parseFloat(animalX) + 21;
    console.log("check3", typeof(animalX) , animalX);
    page += "<br>";

    // Generate the button for Website Links
    let buttonCount = 0;
    for (let i = 0; i < websiteCount; i++) {
        var websiteName = document.getElementById("websiteName" + i).value;
        var websiteAddress = document.getElementById("websiteAddress" + i).value;
        page += "<button style=\"margin-right:10px;\" onclick='window.open(" + "\"http://" + websiteAddress + "\")'>" + websiteName + "</button>";
        buttonCount += 1;
        if (buttonCount%5 === 0) {
            animalX = parseFloat(animalX) + 21;
            console.log("check4", typeof(animalX) , animalX);
            page += "<br>";
        }
    }
    animalX = parseFloat(animalX) + 21;
    console.log("check5", typeof(animalX) , animalX);
    page += "<br>";

    // Generate drag and drop text and function
    page += "<p style = \"font-size: 25px; position: absolute; top:" + animalX + "px; left: 0px; background-color: lightgrey;\" onmousedown = \"grabber(event);\"> !!DRAG AND MOVE AWAY!!This is ISP PA2</p>";
    page += "<script>var diffX,diffY,theElement;function grabber(event){theElement=event.currentTarget;let posX=parseInt(theElement.style.left);let posY = parseInt(theElement.style.top);"
    page += "diffX=event.clientX-posX;diffY=event.clientY-posY;document.addEventListener(\"mousemove\",mover,true);document.addEventListener(\"mouseup\", dropper, true);event.stopPropagation();event.preventDefault();}"
    page += "function mover(event){theElement.style.left=(event.clientX-diffX)+\"px\";theElement.style.top=(event.clientY-diffY)+\"px\";event.stopPropagation();}function dropper(event){document.removeEventListener(\"mouseup\""
    page += ", dropper, true);document.removeEventListener(\"mousemove\", mover, true);event.stopPropagation();}</script></body>"
    animalX = parseFloat(animalX) + 25;
    
    // Generate the animal section
    let animals = document.getElementsByName("animal");
    let animalsCount = 0;
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].checked){
            page += "<div class=\"animals\" style=\"width:120px; height:120px; float:left; margin: 10px;\" onclick=\"playSound('" + animals[i].id + "')\"><img src=\"./Pictures/" + animals[i].id + ".png\" width=\"120px\"></div>";
            animalsCount += 1;
        }
    }
    page += "<script>function playSound(animal){let audio = new Audio(\"./Sounds/\" + animal + \".wav\");audio.play();}</script>";

    // Generate back ground
    let backGrounds = document.getElementsByName("backGround");
    for (let i = 0; i < backGrounds.length; i++) {
        if (backGrounds[i].style.opacity == 1) {
            page += "<style>body{background-image:url(\"./Pictures/BackGrounds/" + backGrounds[i].id + ".jpg\");background-size:cover;background-color:hsla(0, 100%, 30%, opacity);}</style>"
        }
    }

    // Create new window and open with "page"
    myWindow = window.open("", "ISP", "width=800, height=1200");
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

// Onclick function for select background
function selectBackGround(item) {
    backGounds = document.getElementsByName("backGround");
    for (let i = 0; i < backGounds.length; i++) {
        if (backGounds[i].id == item) {
            backGounds[i].style.opacity = 1;
        }
        else {
            backGounds[i].style.opacity = 0.5;
        }
    }
}
