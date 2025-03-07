SELECT
    ap.lastname AS applicant_lastname,
    COALESCE(SUM(CASE WHEN a.status = 'accepted' THEN 1 ELSE 0 END), 0) AS accepted_count,
    COALESCE(SUM(CASE WHEN a.status = 'rejected' THEN 1 ELSE 0 END), 0) AS rejected_count,
    COALESCE(SUM(CASE WHEN a.status = 'created' THEN 1 ELSE 0 END), 0) AS created_count,
    COALESCE(SUM(CASE WHEN a.status = 'due_interview' THEN 1 ELSE 0 END), 0) AS due_interview_count
FROM
    Applicant ap
LEFT JOIN
    Application a ON ap.id = a.applicant_id
GROUP BY
    ap.lastname
ORDER BY
    ap.lastname;