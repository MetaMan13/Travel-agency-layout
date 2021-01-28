// HAMBURGER MENU VARIABLES AND FUNCIONS
let hamburgerMenu = document.getElementById('hamburgerMenu');
/* 
    The method below is used to open the hamburger menu
    when we click on the hamburger icon
*/
function openHamburgerMenu()
{
    if(hamburgerMenu.style.display = "none")
    {
        changeHamburgerMenuStyleToGrid();
    }
}
/* 
The method below is used to close the hamburger menu
when we click the exit(X) icon in the hamburger menu
*/
function closeHamburgerMenu()
{
    if(hamburgerMenu.style.display = "grid")
    {
        changeHamburgerMenuStyleToHide();
    }
}

/* 
    The function below is used to change the display
    property of the hamburger menu to grid
*/

function changeHamburgerMenuStyleToGrid()
{
    hamburgerMenu.style.display = "grid";
}

/*
    The function below is used to change the display
    property of the hamburger menu to none
*/

function changeHamburgerMenuStyleToHide()
{
    hamburgerMenu.style.display = "none";
}