# Adobe After Effects Automation Toolkit

This repository combines three automation solutions for Adobe After Effects, each designed to help artists and editors streamline repetitive tasks.

- [x] Automate CSV to Adobe After Effects.
- [x] Render web currencies.
- [x] Label and remove unused footage.


<hr />

# Automate CSV to Adobe After Effects:

This script automates the process of setting a large amount of text content into different layers in Adobe After Effects. It significantly reduces manual effort by importing data from a CSV file, applying it to text layers within a composition, rendering the video, and repeating the process for each row of data.

<img src='./csv-to-ae/capture.jpg' />

## Features

- **Automation**: Copies data from a CSV file and sets it into After Effects compositions.
- **Efficiency**: Converts hours of manual work into minutes.
- **Customization**: Easily adaptable for different CSV formats and After Effects projects.


## Instructions:

1. **Clone the repository**:
   ```sh
    git clone https://github.com/lopezrunco/csv-to-ae-script
   ```

2. **Prepare your data**:
    Export your Excel file as a .csv format (values separated by commas). Use the provided sample file "list.csv" in the assets folder for testing.

    **Example CSV data**:

    ```sh

        Lote,Categoria,Cant.,Peso,Clase,Estado,Dpto,Propietario
        -------------------------------------------------------
        76,Terneras,71,184 kg,MBB,B,Durazno,EL PUESTO
        45,Terneras,56,180 kg,MB,MB,Florida,BATALLA SDI
        ... (additional rows)
    ```

    This version of the script is running with this example data, to automate your own work, you have to customize the script according to your data.

3. **Configure the script**:
    Edit index.js and set the csvFile variable to point to your CSV file:

    ```js
        var csvFile = File('~/Documents/list.csv')
    ```

4. **Set up After Effects**:
    Open the included After Effects sample project (ae-project.aep). Navigate to Edit > Templates > Output module templates and set your preferred default output settings.

5. **Run the script:**:
    Execute index.js to start the automation process.

Note: Depending on your specific project needs, you may need to adjust the motion graphics and other parameters within After Effects.

## Compatibility
Tested on Adobe After Effects 2022.

<hr />

# Render web currencies:

Scrap the web of Banco Central del Uruguay, set the currency info in an After Effects comp and render.

<img src='./render-web-currencies/screenshot.jpg' />

## Used libraries:

Axios: Promise-based HTTP client for the browser and node.js

Cheerio: Parses markup and provides an API for traversing/manipulating the resulting data structure

## Instructions

1. Clone the repo
   ```sh
   git clone https://github.com/lopezrunco/ae-script-render-web-currencies.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Run scraper
   ```sh
   node fetch-currencies.js
   # All data will be stored in data.json file
   ```

4. Go to the After Effects project and run the script render.js

## Tested in:

```sh
# After Effects 2022
```

<hr />

# Label and remove unused footage:

In the dynamic world of Adobe After Effects, organization is key. This script provides the artist with the ability to label and efficiently manage used and unused files within compositions.

## Instructions
- Download the file script.js
- Open After Effects
- Go to File - Scripts - Run script file...
- Select the file script.js
