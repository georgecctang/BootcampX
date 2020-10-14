SELECT t.name, s.name AS student, a.name AS assignment, ar.completed_at - ar.started_at AS duration
FROM assistance_requests AS ar
JOIN teachers AS t ON ar.teacher_id = t.id
JOIN students AS s ON ar.student_id = s.id
JOIN assignments AS a ON ar.assignment_id = a.id
ORDER BY duration;
