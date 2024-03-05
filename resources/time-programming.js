// Start date (replace this line with the date you started programming)
const startDate = new Date("2021-11-10");

// Current date
const currentDate = new Date();

// Calculate the difference between the dates in milliseconds
const differenceInMilliseconds = currentDate - startDate;

// Convert the difference in milliseconds to days
const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

// Calculate years, months, and days from the difference in days
const years = Math.floor(differenceInDays / 365);
const months = Math.floor((differenceInDays % 365) / 30);
const days = Math.floor((differenceInDays % 365) % 30);

// Create the phrase based on the calculated information
const phrase =
  years +
  " years, " +
  months +
  " months, and " +
  days +
  " days since I started programming.";

// Generate the output in Markdown
const markdownOutput =
  "### Time elapsed since I started programming:\n\n" + phrase;

return markdownOutput;
