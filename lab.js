//Question one
function greetUser(username)
{
    let username=document.getElementById('usrname').value;
    document.getElementById('output').innerText="hello, "+username;

    div.innerHTML= `Hello, ${name}! Welcome to the site.`;
}

//Question two
function changeText()
{
    document.getElementById("message").innerText= "Hello, World!";
}

//Question three
function addNumbers()
{
    var num1= parseFloat(document.getElementById("number1").value);
    var num2= parseFloat(document.getElementById("number2").value);
    var result= num1+ num2;
    document.getElementById("result=").innerText= "Result "+result;
}
    
//Question four
function updateTitle()
{
    var newTitle= document.getElementById("inputField").value;
    document.getElementById("title").textContent=newTitle;
}

//Question five
function combineText() {
  
    var text1 = document.getElementById("inputOne").value;
    var text2 = document.getElementById("inputTwo").value;
    var combined = text1 + " " + text2;
    document.getElementById("combinedText").innerText = combined;
}

//Question six
const button=document.getElementById('changeButton');
const  colorBox= document.getElementById('colorBox');
button.addEventListener('click', function() {
    colorBox.style.backgroundColor='blue';
})




