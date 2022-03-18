import P5 from 'p5';
const ml5 = require('ml5')
console.log(ml5.version)

// export p5 sketch
export default function sketch(p5: P5) {
let mobilenet
let img
let label

  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas div parent size
    let c = p5.createCanvas(appSize.width, 200).parent('imageClassifier') // Create Canvas
		 p5.background("#f8f8f8")
		 p5.textAlign(p5.CENTER)
		 p5.textSize(18)
		 p5.text('Drop an image here to predict its content', p5.width/2,p5.height/2)
		 mobilenet = ml5.imageClassifier('mobileNet', mobilenetReady)
		 c.drop(archivoRecibido);
		 label = p5.createDiv('')
  }

function mobilenetReady() {
	  console.log('mobilenet is ready...')
}

function archivoRecibido(archivo) {
	  console.log('hay archivo...: ' + archivo.name)
		// @ts-ignore
		  img = p5.createImg(archivo.data, visualiza_archivo).hide()
}

function visualiza_archivo() {
		p5.background("#f8f8f8")
	  p5.image(img, p5.width /4 , 0, p5.width /2 , 200);
		  predecir_imagen()
}

function predecir_imagen() {
	  mobilenet.predict(img, function(err, results) {
			    label.html('it looks like a ' + results[0].label)
					  })
}

  // P5 draw function
  p5.draw = function () {
 //   p5.background("#f8f8f8") // set background color
//		p5.circle(100,100,50)
  }

  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div
		 p5.background("#f8f8f8")

		 p5.text('Drop an image here to predict its content', p5.width/2,p5.height/2)
  }


}
