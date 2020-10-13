SELECT a.id, a.name, a.day, a.chapter, COUNT(ar.*) AS total_requests
FROM assignments AS a
JOIN assistance_requests AS ar
ON a.id = ar.assignment_id
GROUP BY (a.id)
ORDER BY total_requests DESC
;