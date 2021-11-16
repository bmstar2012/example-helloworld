/**
 * Hello world
 */

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayHello,
  reportGreetings,
} from './hello_world';

async function main() {
  console.log("Let's say hello to a Solana account...");

  console.log("Step1: establishConnection Start");

  // Establish connection to the cluster
  await establishConnection();
  console.log("Step1: establishConnection Done");

  console.log("Step2: establishPayer Start");
  // Determine who pays for the fees
  await establishPayer();
  console.log("Step2: establishPayer Done");

  console.log("Step3: checkProgram Start");
  // Check if the program has been deployed
  await checkProgram();
  console.log("Step3: checkProgram Done");

  console.log("Step4: sayHello Start");
  // Say hello to an account
  await sayHello();
  console.log("Step4: sayHello Done");

  console.log("Step5: reportGreetings Start");
  // Find out how many times that account has been greeted
  await reportGreetings();
  console.log("Step5: reportGreetings End");

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
