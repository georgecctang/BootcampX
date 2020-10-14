const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const rowLimit = process.argv[3] || 5;

pool.query(`
SELECT s.id, s.name, c.name AS cohort
FROM students AS s
JOIN cohorts AS c ON c.id = s.cohort_id
WHERE c.name LIKE $1
LIMIT $2
`, [`%${cohortName}%`, rowLimit])
.then(res => 
  res.rows.forEach(({name, id, cohort}) => console.log(`${name} has Student ID of ${id} and is in Cohort ${cohort}`)))
.catch(err => console.error('query error', err.stack));
