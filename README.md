# react-app-calculate-water

[React-App-Calculate-Water-Boiling](https://wladislaw28.github.io/react-app-calculate-water/) - This application is created using React library. The application allows - whether the water boils at a given temperature.
In this application, the "Lifting status" method is implemented. 2 input fields work synchronously with each other (“source of truth” - App.js).
The reason is that instead of trying to synchronize the state between different components, you need to rely on a unidirectional data stream.
