import styles from '@/styles/Table.module.css'
import { Applicant } from '@prisma/client'

export const dynamic = 'force-dynamic'

export default async function ApplicantsTable() {
    const res = await fetch('http://localhost:3000/api/applicants', {method: 'GET'})
    const applicants: Applicant[] = await res.json()
    return (
        <div className={styles.tableContainer}>
            <h2>Таблица соискателей</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Код соискателя</th>
                    <th>Фамилия</th>
                    <th>Опыт работы</th>
                </tr>
                </thead>
                <tbody>
                {applicants.map((applicant) => (
                    <tr key={applicant.id}>
                        <td>{applicant.id}</td>
                        <td>{applicant.lastname}</td>
                        <td>{applicant.experience}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}