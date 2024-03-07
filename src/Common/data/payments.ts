const payments = 
[
    {
        id:1,
        member:"Donald Risher",
        date:"20 Sep, 2022",
        paymentDetails:"Maintenance",
        paymentType:"Google Pay",
        amount :"1200.00",
        status:"Paid"
    },
    {
        id:2,
        member:"Donald Risher",
        date:"20 Sep, 2022",
        paymentDetails:"Flight Booking",
        paymentType:"Credit Card",
        amount :"3600.00",
        status:"Failed"
    },
    {
        id:3,
        member:"Jolie Hood",
        date:"28 Mar, 2022",
        paymentDetails:"Office Rent",
        paymentType:"Cash",
        amount :"800.00",
        status:"Pending"
    },
    {
        id:4,
        member:"Buckminster Wong",
        date:"23 Aug, 2022",
        paymentDetails:"Salary Payment",
        paymentType:"Google Pay",
        amount :"1600.00",
        status:"Paid"
    },
    {
        id:5,
        member:"Howard Lyons",
        date:"18 Sep, 2022",
        paymentDetails:"Maintenance",
        paymentType:"Bank Transfer",
        amount :"3200.00",
        status:"Failed"
    },
    {
        id:6,
        member:"Howard Oneal",
        date:"12 Feb, 2022",
        paymentDetails:"Online Product",
        paymentType:"Credit Card",
        amount :"900.00",
        status:"Paid"
    },
    {
        id:7,
        member:"Jena Hall",
        date:"30 Nov, 2022",
        paymentDetails:"Train Booking",
        paymentType:"Cash",
        amount :"200.00",
        status:"Paid"
    },
    {
        id:8,
        member:"Paki Edwards",
        date:"23 Sep, 2022",
        paymentDetails:"Maintenance",
        paymentType:"Google Pay",
        amount :"1200.00",
        status:"Paid"
    },
    {
        id:9,
        member:"James Diaz",
        date:"16 Aug, 2022",
        paymentDetails:"Bus Booking",
        paymentType:"Google Pay",
        amount :"1800.00",
        status:"Failed"
    },
    {
        id:10,
        member:"Howard Oneal",
        date:"12 Feb, 2022",
        paymentDetails:"Online Product",
        paymentType:"Credit Card",
        amount :"900.00",
        status:"Paid"
    },
]

export {payments}


/*

   // Import the createConnection function from the mysql2/promise module
import { createConnection } from 'mysql2/promise';

// Define an async function that fetches data from the database
async function payments() {
  try {
    // Create the connection to the database
    const connection = await createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'siasfuvp_invoice_portal'
    });

    // Execute a query to select all rows from the payment table
    const [rows] = await connection.execute('SELECT * FROM paymenttable');

    // Log the rows to the console (for debugging purposes; you might want to remove this in production)
    console.log(rows);

    // Close the connection to the database
    await connection.end();

    // Return the rows from the query
    return rows;
  } catch (error) {
    // If an error occurs, log it to the console and throw the error to be handled by the caller
    console.error('Error fetching data: ', error);
    throw error; // Re-throw the error to ensure it can be caught by the caller
  }
}

// Export the Payments function so it can be imported and used in other modules
export { payments };
*/
    