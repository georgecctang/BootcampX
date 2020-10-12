SELECT c.name, COUNT(assu.id) AS total_submissions
FROM cohorts AS c
JOIN students AS s
ON c.id = s.cohort_id
JOIN assignment_submissions AS assu
ON s.id = assu.student_id
GROUP BY c.name
ORDER BY COUNT(assu.id) DESC;