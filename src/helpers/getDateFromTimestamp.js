const months = {
   0: "January",
   1: "February",
   2: "March",
   3: "April",
   4: "May",
   5: "June",
   6: "July",
   7: "August",
   8: "September",
   9: "October",
   10: "November",
   11: "December",
};

const days = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday",
};

const getDateFromTimestamp = (timestamp) => {
   const date = new Date(timestamp);

   const year = date.getFullYear();

   const month = months[date.getMonth()];

   const day = days[date.getDay()];

   const hours = date.getHours();

   const minutes = date.getMinutes();

   const seconds = date.getSeconds();

   return `${day}, ${
      date.getDate() + 1
   } ${month} ${year}, ${hours}:${minutes}:${seconds}`;
};

export default getDateFromTimestamp;
