# Automate CSV to Adobe After Effects Script.

This script automates the process of setting a large amount of text content into different layers in Adobe After Effects. It significantly reduces manual effort by importing data from a CSV file, applying it to text layers within a composition, rendering the video, and repeating the process for each row of data.

<img src='./capture.jpg' />

## Features

- **Automation**: Copies data from a CSV file and sets it into After Effects compositions.
- **Efficiency**: Converts hours of manual work into minutes.
- **Customization**: Easily adaptable for different CSV formats and After Effects projects.


## Instructions:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/lopezrunco/csv-to-ae-script

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

## Versions:

```sh
    - Basic script (main branch)
    - angus
    - baqueano
    - barracas
    - elpuesto
    - losmendez
    - ost
    - parana
    - piedritas
    - sanalberto
    - santagraciana
    - shorts
    - sierravista
    - subtitles
    - tilos
    - yaguari
    - yubely
```