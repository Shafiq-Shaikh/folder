
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  
  
  const studentsData = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 21 }
  ];


  connection.query('INSERT INTO students (name, age) VALUES ?', [studentsData.map(student => [student.name, student.age])], (err, result) => {
    if (err) {
      console.error('Error inserting records:', err);
      connection.end(); // Close the connection
      return;
    }
    
    console.log('Inserted records:', result);
    
    connection.end();
  });
});
