SELECT SUM(duration)
FROM assignment_submissions AS assu
JOIN students AS s
ON student_id = s.id
JOIN cohorts as c
ON cohort_id = c.id
WHERE c.name = 'FEB12';