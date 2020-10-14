const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const cohortName = process.argv[2];

pool.query(`
  SELECT DISTINCT t.name AS teacher
  FROM teachers AS t
  JOIN assistance_requests AS ar ON t.id = ar.teacher_id
  JOIN students AS s ON s.id = ar.student_id
  JOIN cohorts AS c ON c.id = s.cohort_id
  WHERE c.name = $1
  ORDER BY teacher;
  `, [cohortName])
.then(res => res.rows.forEach(
  ({teacher}) => console.log(`${cohortName}: ${teacher}`)
))
.catch(err => console.error('query error', err.stack));