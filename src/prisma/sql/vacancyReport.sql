SELECT
      v.title AS vacancy_title,
      COALESCE(SUM(CASE WHEN a.status = 'accepted' THEN 1 ELSE 0 END), 0) AS accepted_count,
      COALESCE(SUM(CASE WHEN a.status = 'rejected' THEN 1 ELSE 0 END), 0) AS rejected_count,
      COALESCE(SUM(CASE WHEN a.status = 'created' THEN 1 ELSE 0 END), 0) AS created_count,
      COALESCE(SUM(CASE WHEN a.status = 'due_interview' THEN 1 ELSE 0 END), 0) AS due_interview_count
    FROM
      Vacancy v

    LEFT JOIN
      Application a ON v.id = a.vacancy_id
    GROUP BY
      v.title
    ORDER BY
      v.title;