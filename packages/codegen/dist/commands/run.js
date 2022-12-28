import chalk from "chalk";
export const command = "run";
export const describe = "Run code generation";
export const builder = (yargs)=>{
    return yargs.options("definitions", {
        type: "string",
        demandOption: true,
        describe: "FHIR definitions file directory path."
    });
};
export const handler = async (yargs)=>{
    try {
        console.log(yargs.definitions);
    } catch (error) {
        console.error(chalk.red(error));
        console.error();
        console.error(chalk.gray(error.stack));
    }
};
