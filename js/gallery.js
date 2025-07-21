/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
        let element = document.getElementById("image");
        element.style.backgroundImage = "url('" + previewPic.src + "')";
        element.innerHTML = previewPic.alt;

	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		let element = document.getElementById("image");
        element.style.backgroundImage = "url('')";
        element.innerHTML = "Pick an Image";

	}


  function askName(){
    const name = prompt("what is your name visitor?");
    let element = document.getElementById("Name");
    element.innerHTML = "Dear " + name + " ";
    console.log(name)
    images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++){
      images[i].setAttribute("tabindex", "0");
    }
  }

  function mark(previewPic) {
    previewPic.style.filter = 'blur(5px)';
    let element = document.getElementById("image");
    element.style.backgroundImage = "url('')";
    element.innerHTML = "Pick an Image";
  }
