SELECT s.name AS student, AVG(assu.duration) AS average_assignment_duration,
AVG(a.duration) AS average_estimated_duration
FROM students AS s
JOIN assignment_submissions AS assu
ON s.id = assu.student_id
JOIN assignments AS a
ON a.id = assu.assignment_id
WHERE s.end_date IS NULL
GROUP BY s.name
HAVING AVG(assu.duration) < AVG(a.duration)
ORDER BY AVG(assu.duration);