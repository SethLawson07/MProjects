// Import jimp module
const Jimp = require("jimp");

// Read the PNG file and convert it to editable format
Jimp.read("./static/developer.jpg", function (err, image) {
	if (err) {
	
		// Return if any error
		console.log(err);
		return;
	}

	// Convert image to JPG and store it to
	// './output/' folder with 'out.jpg' name
	image.write("./output/developer.png");
    console.log("Success");
});
