// Exercise 3
console.log("====================== Exercise 3 ================");

const year = prompt("Жил оруулна уу.");
let result = "";


// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
// {
//     console.log(`${year} = Өндөр жил`);
// }
// else {
//     console.log(`${year} = Өндөр жил биш`);
// }



(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? result = "Өндөр жил" : result = "Өндөр жил биш";
console.log(year + " он = " + result);


// 2000 яах вэ? 400 яах вэ? 
/*
In the Gregorian calendar, a normal year consists of 365 days. Because the actual length of a sidereal year (the time required for the Earth to revolve once about the Sun) is actually 365.2425 days, a "leap year" of 366 days is used once every four years to eliminate the error caused by three normal (but short) years. Any year that is evenly divisible by 4 is a leap year: for example, 1988, 1992, and 1996 are leap years.
However, there is still a small error that must be accounted for. To eliminate this error, the Gregorian calendar stipulates that a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400.

For this reason, the following years are not leap years:

1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600

This is because they are evenly divisible by 100 but not by 400.

The following years are leap years: 1600, 2000, 2400

This is because they are evenly divisible by both 100 and 400.

Because versions of Microsoft Excel earlier than Excel 97 handle only years from 1900 to 2078, only the year 1900 is subject to the 100/400 exclusion rule of leap years in Microsoft Excel. However, in order to be compatible with other programs, Microsoft Excel treats the year 1900 as a leap year.

How to determine whether a year is a leap year
To determine whether a year is a leap year, follow these steps:

If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
The year is a leap year (it has 366 days).
The year is not a leap year (it has 365 days).
*/
