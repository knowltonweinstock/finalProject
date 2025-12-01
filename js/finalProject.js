let oneKtable;

let submitButton
let oneKButton
let fiveKButton
let tenKButton
let mainmenuButton

let oneKactivityMenu
let fiveKactivityMenu
let tenKactivityMenu

let canvas 

let oneKimageArray = []
let fiveKimageArray = []
let tenKimageArray = []



let startScreenBool = true
let oneKBool = false 
let fiveKBool = false
let tenKBool = false  


let superMaples


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  oneKtable = loadTable('js/1.6k.csv', 'csv', 'header', oneKloadImageArray);
  fiveKtable = loadTable('js/5k.csv', 'csv', 'header', fiveKloadImageArray);
  tenKtable = loadTable('js/10k.csv', 'csv', 'header', tenKloadImageArray);
  superMaples = loadFont('SuperMaples.ttf')

}

function oneKloadImageArray(){
  for(let i = 0; i < oneKtable.getRowCount(); i++){
    oneKimageArray[i] = loadImage(oneKtable.getString(i, 'Media'))

  }
  
}

function fiveKloadImageArray(){
  for(let i = 0; i < fiveKtable.getRowCount(); i++){
    fiveKimageArray[i] = loadImage(fiveKtable.getString(i, 'Media'))

  }
  
}

function tenKloadImageArray(){
  for(let i = 0; i < tenKtable.getRowCount(); i++){
    tenKimageArray[i] = loadImage(tenKtable.getString(i, 'Media'))

  }


  
}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index', '-1')
  background(0);
  fill(255)

  imageMode(CENTER)
 

  mainmenuButton = createButton('Main Menu');
  mainmenuButton.position(1150, windowHeight-360);
  mainmenuButton.mousePressed(startScreen)
  mainmenuButton.hide();

  oneKButton = createButton('1.6k Tips')
  oneKButton.position(300,100)
  oneKButton.mousePressed(oneKStart)

  fiveKButton = createButton('5k Tips')
  fiveKButton.position(500,100)
  fiveKButton.mousePressed(fiveKStart)

  tenKButton = createButton('10k Tips')
  tenKButton.position(700,100)
  tenKButton.mousePressed(tenKStart)

  submitButton = createButton('Submit')
  submitButton.position(50,100)
  submitButton.hide()

  oneKactivityMenu = createSelect()
  oneKactivityMenu.position(50, 50)
  oneKactivityMenu.option('Select Activity')
  oneKactivityMenu.hide()

  fiveKactivityMenu = createSelect()
  fiveKactivityMenu.position(50, 50)
  fiveKactivityMenu.option('Select Activity')
  fiveKactivityMenu.hide()

  tenKactivityMenu = createSelect()
  tenKactivityMenu.position(50, 50)
  tenKactivityMenu.option('Select Activity')
  tenKactivityMenu.hide()


  //cycle through the table rows
  // for (var i = 0; i < table.getRowCount(); i++){
  //   //if(table.getString(i, 'Activity Name'))
  //   //grab each of the dates
  //   let date = table.getString(i, 'Activity Date');

  //   let activityName = table.getString(i, 'Activity Name')

  //   companyMenu.option(activityName)

  //   //print dates to the console
  //   print(date)

  //   //print dates on the screen
  //   //text(date, 50, (i*40)+40)

  //   //text(company, 200, (i*40)+40)


  // }

   for(let i = 0; i < oneKtable.getRowCount(); i++){
      let activityName = oneKtable.getString(i, 'Activity Name')
      oneKactivityMenu.option(activityName)

    }

     for(let i = 0; i < fiveKtable.getRowCount(); i++){
      let activityName = fiveKtable.getString(i, 'Activity Name')
      fiveKactivityMenu.option(activityName)

    }

     for(let i = 0; i < tenKtable.getRowCount(); i++){
      let activityName = tenKtable.getString(i, 'Activity Name')
      tenKactivityMenu.option(activityName)

    }


//  submitButton.mousePressed(changeData)

}


function startScreen(){
 startScreenBool = true
  oneKBool = false
  fiveKBool = false
  tenKBool = false
  oneKButton.show()
  fiveKButton.show()
  tenKButton.show()

  mainmenuButton.hide()
  oneKactivityMenu.hide()
  fiveKactivityMenu.hide()
  tenKactivityMenu.hide()

  background(0)
  textSize(30)
  //textAlign(CENTER)
  imageMode(CENTER)
  text("Elevate your running performance. Find simple, practical running tips to help you hit your goals - whether you're chasing a faster 5K or gearing up for your first 10K", 1150, windowHeight-360, 300)

  image(oneKimageArray[0], 100, 200, 200, 350)
  image(oneKimageArray[1], 400, 200, 200, 350)
  image(oneKimageArray[2], 700, 200, 200, 350)

  image(fiveKimageArray[0], 1000, 200, 200, 350)
  image(fiveKimageArray[1], 1300, 200, 200, 350)
  image(fiveKimageArray[2], 100, 600, 200, 350)

  image(tenKimageArray[0], 400, 600, 200, 350)
  image(tenKimageArray[1], 700, 600, 200, 350)
  image(tenKimageArray[2], 1000, 600, 200, 350)



  // text("1.6K", 300, 100)
  // text("5K", 500, 100)


}

function oneKStart(){
  oneKButton.hide()
  fiveKButton.hide()
  tenKButton.hide()
  mainmenuButton.show()
  //submitButton.show()
  oneKactivityMenu.show()
  startScreenBool = false
  oneKBool = true
  background(0)
  textSize(30)
  textAlign(LEFT)
  imageMode(CENTER)
  textFont(superMaples)
  fill(255)

  text("Focus on a steady pace, good breathing, and a proper warm-up to keep your mile strong and controlled.", 50, windowHeight-200, 600)
  

   for(let i = 0; i < oneKtable.getRowCount(); i++){
    if(oneKactivityMenu.value() == oneKtable.getString(i, 'Activity Name')){
      text("Activity: " + oneKtable.getString(i, 'Activity Name'), windowWidth/2, 50)
      text("Time in Seconds: " + oneKtable.getString(i, 'Elapsed Time'), windowWidth/2, 85)
      text("Distance in Kilometers: " + oneKtable.getString(i, 'Distance in kilometers'), windowWidth/2, 115)
      //text(oneKtable.getString(i, 'Moving Time'), windowWidth/2, 140)
      text("Total Steps: " + oneKtable.getString(i, 'Total Steps'), windowWidth/2, 175)
      image(oneKimageArray[i], windowWidth/2, windowHeight/2, 200, 350)

      
    }
  }
  
}

function fiveKStart(){
  oneKButton.hide()
  fiveKButton.hide()
  tenKButton.hide()
  mainmenuButton.show()
  //submitButton.show()
  fiveKactivityMenu.show()
  startScreenBool = false
  fiveKBool = true
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  fill(255)


   for(let i = 0; i < fiveKtable.getRowCount(); i++){
    if(fiveKactivityMenu.value() == fiveKtable.getString(i, 'Activity Name')){
      text("Activity: " + fiveKtable.getString(i, 'Activity Name'), windowWidth/2, 50)
      text("Time in Seconds: " + fiveKtable.getString(i, 'Elapsed Time'), windowWidth/2, 85)
      text("Distance in Kilometers: " + fiveKtable.getString(i, 'Distance in kilometers'), windowWidth/2, 115)
      //text(fiveKtable.getString(i, 'Moving Time'), windowWidth/2, 140)
      text("Total Steps: " + fiveKtable.getString(i, 'Total Steps'), windowWidth/2, 175)
      image(fiveKimageArray[i], windowWidth/2, windowHeight/2, 200, 350)

    
    }
  }
  
}

function tenKStart(){
  oneKButton.hide()
  fiveKButton.hide()
  tenKButton.hide()
  mainmenuButton.show()
  //submitButton.show()
  tenKactivityMenu.show()
  startScreenBool = false
  tenKBool = true
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  fill(255)


   for(let i = 0; i < tenKtable.getRowCount(); i++){
    if(tenKactivityMenu.value() == tenKtable.getString(i, 'Activity Name')){
      text("Activity: " + tenKtable.getString(i, 'Activity Name'), windowWidth/2, 50)
      text("Time in Seconds: " + tenKtable.getString(i, 'Elapsed Time'), windowWidth/2, 85)
      text("Distance in Kilometers: " + tenKtable.getString(i, 'Distance in kilometers'), windowWidth/2, 115)
      //text(tenKtable.getString(i, 'Moving Time'), windowWidth/2, 140)
      text("Total Steps: " + tenKtable.getString(i, 'Total Steps'), windowWidth/2, 175)
      image(tenKimageArray[i], windowWidth/2, windowHeight/2, 200, 350)

    }
  }
  
}


function draw(){

  if(startScreenBool == true){
    startScreen()
  }

  if(oneKBool == true){
    oneKStart()
  }
  

  if(fiveKBool == true){
    fiveKStart()
  }
  

  if(tenKBool == true){
    tenKStart()
  }
  

  }


// function changeData(){
//   background(0)
//   textSize(30)
//   textAlign(CENTER)
//   imageMode(CENTER)

//   for(let i = 0; i < table.getRowCount(); i++){
//     if(companyMenu.value() == table.getString(i, 'Activity Name')){
//       text("Activity: " + table.getString(i, 'Activity Name'), windowWidth/2, 50)
//       text(table.getString(i, 'Elapsed Time'), windowWidth/2, 70)
//       text(table.getString(i, 'Distance in kilometers'), windowWidth/2, 90)
//       text(table.getString(i, 'Moving Time'), windowWidth/2, 130)
//       text(table.getString(i, 'Max Speed'), windowWidth/2, 170)
//       text(table.getString(i, 'Average Speed'), windowWidth/2, 210)
//       text(table.getString(i, 'Total Steps'), windowWidth/2, 250)
//       // for(let j = 0; j < table.getString(i, 'frequency'); j++){
//       //   image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)

//       // }
//     }
//   }
// }
