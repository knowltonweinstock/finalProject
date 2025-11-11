let table;

let submitButton
let companyMenu
let fiveKButton

let canvas 

let imageArray = []

let startScreenBool = true
let fiveKBool = false 

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/stravaActivities.csv', 'csv', 'header');

}

function loadImageArray(){
  for(let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage('images/' + table.getString(i, 'image'))

  }

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index', '-1')

  background(0);
  fill(255)


  fiveKButton = createButton('Tips')
  fiveKButton.position(300,100)
  fiveKButton.mousePressed(fiveKStart)


  submitButton = createButton('Submit')
  submitButton.position(50,100)
  submitButton.hide()

  companyMenu = createSelect()
  companyMenu.position(50, 50)
  companyMenu.option('Select Activity')
  companyMenu.hide()


  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){
    //if(table.getString(i, 'Activity Name'))
    //grab each of the dates
    let date = table.getString(i, 'Activity Date');

    let activityName = table.getString(i, 'Activity Name')

    companyMenu.option(activityName)

    //print dates to the console
    print(date)

    //print dates on the screen
    //text(date, 50, (i*40)+40)

    //text(company, 200, (i*40)+40)


  }


  submitButton.mousePressed(changeData)

}


function startScreen(){
   background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)

  text("5K", 300, 100)


}


function fiveKStart(){
  fiveKButton.hide()
  //submitButton.show()
  companyMenu.show()
  startScreenBool = false
  fiveKBool = true
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)


   for(let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'Activity Name')){
      text("Activity: " + table.getString(i, 'Activity Name'), windowWidth/2, 50)
      text(table.getString(i, 'Elapsed Time'), windowWidth/2, 70)
      text(table.getString(i, 'Distance in kilometers'), windowWidth/2, 90)
      text(table.getString(i, 'Moving Time'), windowWidth/2, 130)
      text(table.getString(i, 'Max Speed'), windowWidth/2, 170)
      text(table.getString(i, 'Average Speed'), windowWidth/2, 210)
      text(table.getString(i, 'Total Steps'), windowWidth/2, 250)
      // for(let j = 0; j < table.getString(i, 'frequency'); j++){
      //   image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)

      // }
    }
  }
  
}




function draw(){

  if(startScreenBool == true){
    startScreen()
  }

  if(fiveKBool == true){
    fiveKStart()
  }


  
}




function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)

  for(let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'Activity Name')){
      text("Activity: " + table.getString(i, 'Activity Name'), windowWidth/2, 50)
      text(table.getString(i, 'Elapsed Time'), windowWidth/2, 70)
      text(table.getString(i, 'Distance in kilometers'), windowWidth/2, 90)
      text(table.getString(i, 'Moving Time'), windowWidth/2, 130)
      text(table.getString(i, 'Max Speed'), windowWidth/2, 170)
      text(table.getString(i, 'Average Speed'), windowWidth/2, 210)
      text(table.getString(i, 'Total Steps'), windowWidth/2, 250)
      // for(let j = 0; j < table.getString(i, 'frequency'); j++){
      //   image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)

      // }
    }
  }


}
