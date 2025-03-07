import styles from '../../../styles/Table.module.css'
import { vacancyReport } from '@prisma/client/sql'
import { StatusEnum } from '@/app/utils'

export const dynamic = 'force-dynamic'

export default async function VacancyReport() {
    const res = await fetch('http://localhost:3000/api/reports/by-vacancies', {method: 'GET'})
    const report: vacancyReport.Result[] = await res.json()
    return (
        <div className={styles.tableContainer}>
            <h2>Отчет по вакансиям</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Вакансия</th>
                    {Object.values(StatusEnum).map(status => <th>{status}</th>)}
                </tr>
                </thead>
                <tbody>
                {report.map((row) => (
                    <tr key={row.vacancy_title}>
                        <td>{row.vacancy_title}</td>
                        <td>{row.created_count}</td>
                        <td>{row.due_interview_count}</td>
                        <td>{row.accepted_count}</td>
                        <td>{row.rejected_count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}