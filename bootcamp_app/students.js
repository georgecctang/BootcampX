const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const [cohortName, limit] = process.argv.slice(2);


// pool.query(`
// SELECT $1 || '%' AS test
// `, ['FEB'])
// .then(res => console.log(res.rows))
// .catch(err => console.error('query error', err.stack));

pool.query(`
SELECT s.id, s.name, c.name AS cohort
FROM students AS s
JOIN cohorts AS c ON c.id = s.cohort_id
WHERE c.name LIKE $1 || '%'
LIMIT $2
`, [cohortName, limit])
.then(res => 
  res.rows.forEach(({name, id, cohort}) => console.log(`${name} has Student ID of ${id} and is in Cohort ${cohort}`)))
.catch(err => console.error('query error', err.stack));
