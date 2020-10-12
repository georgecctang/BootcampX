SELECT SUM(duration)
FROM assignment_submissions AS assu
JOIN students as s
ON student_id = s.id
WHERE name = 'Ibrahim Schimmel';