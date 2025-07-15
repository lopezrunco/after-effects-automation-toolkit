var currenciesData = './data/currencies.json'
var weatherData = './data/weather.json'
var currenciesCompTitleLayers = ['title-1', 'title-2', 'title-3', 'title-4', 'title-5']
var currenciesCompPriceLayers = ['price-1', 'price-2', 'price-3', 'price-4', 'price-5']
var weatherCompDayLayers = ['today', 'tomorrow', 'after-tomorrow', 'after-after-tomorrow', 'after-after-after-tomorrow']
var weatherCompDateLayers = ['date-1', 'date-2', 'date-3', 'date-4', 'date-5']
var weatherAPIIconsNames = ['01d ', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n']

function setCurrenciesAndRender(file) {
    // Read JSON file and obtain data
    file.open('r')
    var data = file.read()
    file.close()
    data = JSON.parse(data)
    // Set content in layers
    for (var i = 0; i < currenciesCompTitleLayers.length; i++) {
        setContentInCurrenciesCompLayers(data[i].title, currenciesCompTitleLayers[i])
        setContentInCurrenciesCompLayers(data[i].price, currenciesCompPriceLayers[i])
    }
    app.project.renderQueue.items.add(app.project.item(1))
    app.project.renderQueue.render()
}

function setContentInCurrenciesCompLayers(content, layer) {
    // Select 01_currencies comp
    var currenciesComp = app.project.item(1)
    // Select layer and set new text
    var layer = currenciesComp.layer(layer)
    var textProp = layer.property("Source Text")
    var textDocument = textProp.value
    textDocument.text = content
    textProp.setValue(textDocument)
}

function setContentInWeatherCompLayers(content, layer) {
    // Select weather comp
    var currenciesComp = app.project.item(2)
    // Select layer and set new text
    var layer = currenciesComp.layer(layer)
    var textProp = layer.property("Source Text")
    var textDocument = textProp.value
    textDocument.text = content
    textProp.setValue(textDocument)
}

function setWeatherAndRender(file) {
    // Read JSON file and obtain data
    file.open('r')
    var data = file.read()
    file.close()
    data = JSON.parse(data)
    // Convert UNIX timestamp
    var days = [
        obtainDay(data.list[0].dt), // today
        obtainDay(data.list[8].dt), // tomorrow
        obtainDay(data.list[16].dt), // afterTomorrow
        obtainDay(data.list[24].dt), // afterAfterTomorrow
        obtainDay(data.list[32].dt) // afterAfterAfterTomorrow
    ]
    var dates = [
        timeConverter(data.list[0].dt), // today
        timeConverter(data.list[8].dt), // tomorrow
        timeConverter(data.list[16].dt), // afterTomorrow
        timeConverter(data.list[24].dt), // afterAfterTomorrow
        timeConverter(data.list[32].dt) // afterAfterAfterTomorrow
    ]

    // Set content in day layers
    for (var j = 0; j < weatherCompDayLayers.length; j++) {
        setContentInWeatherCompLayers(days[j], weatherCompDayLayers[j])
    }
    // Set content in date layers
    for (var k = 0; k < weatherCompDateLayers.length; k++) {
        setContentInWeatherCompLayers(dates[k], weatherCompDateLayers[k])
    }
}

setWeatherAndRender(File(weatherData))
// setCurrenciesAndRender(File(currenciesData))

function obtainDay(unixTimestamp) {
    var newDate = new Date(unixTimestamp * 1000)
    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    var day = days[newDate.getDay()]
    return day
}

function timeConverter(unixTimestamp) {
    var newDate = new Date(unixTimestamp * 1000)
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']
    var month = months[newDate.getMonth()]
    var date = newDate.getDate()
    var time = date + ' ' + month
    return time
}