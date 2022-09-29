const notifier = require("node-notifier");

var cron = require("node-cron");

var data = require("./quotes.json");

const getRandomIndex = (length) => Math.floor(Math.random() * length+1);

cron.schedule("*/30 * * * *", () => {
  const randomItem = data[getRandomIndex(data.length)];
  notifier.notify({
    title: randomItem.quoteAuthor,
    message: randomItem.quoteText,
  });
});
