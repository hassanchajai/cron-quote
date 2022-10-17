const notifier = require("node-notifier");

var cron = require("node-cron");

var data = require("./quotes.json");

const getRandomIndex = (length) => Math.floor(Math.random() * length+1);

let count=0;
console.log('\x1b[36m%s\x1b[0m', `Welcome in Hsn script ! 😁`);

cron.schedule("*/30 * * * *", () => {

  console.clear()
  const randomItem = data[getRandomIndex(data.length)];

  notifier.notify({
    title: randomItem.quoteAuthor,
    message: randomItem.quoteText,
  });
  count++;
  // counting the quotes displayed
  console.log('\x1b[36m%s\x1b[0m', `Quote Number ${count} displayed`);
});
