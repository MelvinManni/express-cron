const express = require("express");
const cron = require("node-cron");

const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to CRON server");
});

cron.schedule(" */2 * * * * *", () => {
  console.log("A cron job that runs every 2 seconds");
});

cron.schedule(" * */2 * * * *", () => {
  console.log("A cron job that runs every 2 minutes");
});

const job = cron.schedule(
  " * */40 * * * *",
  () => {
    console.log("A cron job that runs every 40 minutes");
    console.log("This job will start in 20 minutes");
  },
  {
    scheduled: false,
    timezone: "America/Sao_Paulo",
  }
);

// this will start the job in 20 minutes
setTimeout(() => {
  job.start();
}, 1000 * 60 * 20);

const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
  console.log(`PORT running on: ${PORT}`);
});
