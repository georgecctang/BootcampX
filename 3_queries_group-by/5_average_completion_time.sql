SELECT s.name AS student, AVG(assu.duration) AS average_assignment_duration
FROM students AS s
JOIN assignment_submissions AS assu
ON s.id = assu.student_id
WHERE s.end_date IS NULL 
GROUP BY s.name
ORDER BY AVG(assu.duration) DESC;