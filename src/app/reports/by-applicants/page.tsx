import styles from '@/styles/Table.module.css'
import { applicantReport } from '@prisma/client/sql'
import { StatusEnum } from '@/app/utils'

export const dynamic = 'force-dynamic'

export default async function ApplicantReport() {
    const res = await fetch('http://localhost:3000/api/reports/by-applicants', {method: 'GET'})
    const report: applicantReport.Result[] = await res.json()
    return (
        <div className={styles.tableContainer}>
            <h2>Отчет по соискателям</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Соискатель</th>
                    {Object.values(StatusEnum).map(status => <th key={status}>{status}</th>)}
                </tr>
                </thead>
                <tbody>
                {report.map((row) => (
                    <tr key={row.applicant_lastname}>
                        <td>{row.applicant_lastname}</td>
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