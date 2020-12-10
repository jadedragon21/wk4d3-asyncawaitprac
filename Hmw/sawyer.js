function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 200);
  });
}

async function frustrationDay() {
  console.log("ARGHH")
  const result = await getRandomNumber();
  console.log(result);
}

frustrationDay();
async function printRandomNumber() {
	const randNumber = await getRandomNumber();
  const randNumberLog = `Random Number: ${randNumber}`;
  console.log(randNumberLog);
  htmlLog(randNumberLog);
}
function getRandomNumber() {
	return new Promise(x =>
      setTimeout(() => x(Math.floor(Math.random() * 1000)), 500));
    }
