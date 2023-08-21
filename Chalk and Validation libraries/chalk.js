import chalk from "chalk"
import validator from "validator"

 console.log(chalk.yellow("hello neha negi welcome to our new project"))
 const val=(validator.isEmail("neha@negi.com"))
 console.log(val ?chalk.green.underline(val) : chalk.red(val))