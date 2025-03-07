import styles from '@/styles/Table.module.css'
import { Vacancy } from '@prisma/client'

export const dynamic = 'force-dynamic'

export default async function VacanciesTable() {
    const res = await fetch('http://localhost:3000/api/vacancies', {method: 'GET'})
    const vacancies: Vacancy[] = await res.json()

    return (
        <div className={styles.tableContainer}>
            <h2>Таблица вакансий</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Код вакансии</th>
                    <th>Название</th>
                    <th>Требования</th>
                </tr>
                </thead>
                <tbody>
                {vacancies.map((vacancy) => (
                    <tr key={vacancy.id}>
                        <td>{vacancy.id}</td>
                        <td>{vacancy.title}</td>
                        <td>{vacancy.requirements}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}