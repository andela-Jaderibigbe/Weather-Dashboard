# Weather Service Dashboard

[!Weather Service Dashboard](https://www.dropbox.com/s/keln2we62oq2lm8/Screenshot%202016-10-01%2016.33.59.png?dl=0)

A tiny dashbboard providing information about about the expected rainfall in the upcoming days.

The dashboard consisit of two sliders (**Pressure** and **Temperature**) and Two Charts(**Chance of Rain** and **Amount of Rainfall**)

### Dashboard Description
##### Chance of Rain Chart
The Chance of rain chart displays the mean value and the variance in a line chart. The *x-axis* are the upcoming days(1...7). The *y-axis* is the probability of rain (0 - 100%).

The values of the two sliders(*Pressure* and *Temperature*) are the inputs for the function. These are global estimates and valid for each of the seven days.

##### Amount of Rainfall Chart
The **Amount of Rainfall Chart** is a bar chart. The x-axis will represent the upcoming days(1...7). The y-axis is the amount of rainfall in (l/m2). The values of the bar chart is requested from the server 
> http://private-4945e-weather34.apiary-proxy.com/weather34/rain

##### Pressure
The pressure slider will allow the user to enter the current pressure in **hPa**. The range of the values is [970, 1030] and it is measured in **hpa**.

##### Temperature
The temperature slider will allow the user to enter the current temprature in **˚C**. The range of values is between 10˚C to 35˚C 

### Installation

Weather service dashboard requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd weather-service
$ npm install
$ npm start
```

To view in browser
> open 0.0.0.0:3000

License
----
MIT


**Free Software, Hell Yeah!**
