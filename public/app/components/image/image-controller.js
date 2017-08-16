function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var service = new ImageService();
	
	  function getImage(){
    service.getImage(drawImage)
  }
	
	function drawImage (res) {
		document.body.style.backgroundImage = `url(${res.url})`

	}


getImage()

}




