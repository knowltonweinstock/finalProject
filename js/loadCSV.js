let table;

let submitButton
let companyMenu

let canvas 

let imageArray = []


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header');

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

  submitButton = createButton('Submit')
  submitButton.position(50,100)

  companyMenu = createSelect()
  companyMenu.position(50, 50)
  companyMenu.option('Select Company')


  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'date');

    let company = table.getString(i, 'company')

    companyMenu.option(company)

    //print dates to the console
    print(date)

    //print dates on the screen
    //text(date, 50, (i*40)+40)

    //text(company, 200, (i*40)+40)


  }


  submitButton.mousePressed(changeData)

}

function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)

  for(let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'company')){
      text(table.getString(i, 'company'), windowWidth/2, 50)
      text(table.getString(i, 'date'), windowWidth/2, 90)
      text(table.getString(i, 'location'), windowWidth/2, 130)
      text(table.getString(i, 'service'), windowWidth/2, 170)
      text(table.getString(i, 'frequency'), windowWidth/2, 210)
      for(let j = 0; j < table.getString(i, 'frequency'); j++){
        image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)

      }
    }
  }


}
