var csvFile = File('~/Documents/list.csv')
var csvData = []

// Read line by line and push the data in csvData
// eof: end of line
// r: read
csvFile.open('r')
do {
    csvData.push(csvFile.readln())
} while (!csvFile.eof)
csvFile.close()

// Loops the csvData array, and for every row set the content in the selected text layer and render the comp 
for (var csvDataIdx = 1; csvDataIdx < csvData.length; csvDataIdx++) {
    var thisCSVRow = csvData[csvDataIdx].split(',')
    setContentInLayer(thisCSVRow[0], '_rp')
    setContentInLayer(thisCSVRow[1], '_fechanac')
    setContentInLayer(thisCSVRow[2], '_padre')
    setContentInLayer(thisCSVRow[3], '_madre')
    setContentInLayer(thisCSVRow[4], '_lact')
    setContentInLayer(thisCSVRow[5], '_edad')
    setContentInLayer(thisCSVRow[6], '_dias')
    setContentInLayer(thisCSVRow[7], '_leche')
    setContentInLayer(thisCSVRow[8], '_grasa')
    setContentInLayer(thisCSVRow[9], '_proteina')
    app.project.item(1).name = thisCSVRow[0] // Set the value of 'rp' field as the output name
    app.project.renderQueue.items.add(app.project.item(1))
    app.project.renderQueue.render()
}
alert('All renders are finished')

function setContentInLayer(content, layer) {
    // Select _render comp
    var comp = app.project.item(1)
    // Select layer and set new text
    var layer = comp.layer(layer)
    var textProp = layer.property("Source Text")
    var textDocument = textProp.value
    textDocument.text = content
    textProp.setValue(textDocument)
}