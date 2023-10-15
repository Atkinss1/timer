# timer2
Timer2 is an interactive timer script written in JavaScript that utilizes the `chalk` library and relies on two external functions, "welcome-alarm" and "goodbyeFunc" files.

## Features

- Set a custom timer for specific activities or tasks.
- Receive visual notifications using the `chalk` library to distinguish between various timer states.
- Utilizes external functions for a personalized welcome message and goodbye message.

## Prerequisites

Before using 'timer2.js', make sure you have the following prerequisites installed:
- [Node.js][https://nodejs.org]
- [chalk][https://www.npmjs.com/package/chalk] (you can install it using `npm install chalk@4.1.2)

## Installation

1. Clone this repository to your local machine or download the source code.
```bash
git clone https://github.com/Atkinss1/timer2.git
cd timer2
```
2. Install the required dependencies.
```bash
npm install chalk@4.1.2
```
3. ensure you have the "welcome-alarm" and "goodbyeFunc" external functions available in the same directory.

 ## Usage

 1. Open terminal and navigate to the project directory.
 2. Run `timer2.js`
```bash
node timer2.js
```
3. The graphics should display and prompt you with directions.

## External Functions

* `welcome-alarm`: This function will be called when you run `node timer2.js`.
* `goodbyeFunc`: This function will be called when you exit the program via `CTRL + C` or the timer ends.

## Acknowledgements

* chalk for the colorful terminal output.

## Author
* Jordan Atkins
* Github: [https://github.com/Atkinss1]
