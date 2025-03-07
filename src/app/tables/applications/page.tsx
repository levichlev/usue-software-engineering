import styles from '@/styles/Table.module.css'
import { TableRow } from '@/app/tables/applications/tableRow'
import { Applicant, Application, Vacancy } from '@prisma/client'

export const dynamic = 'force-dynamic'

interface IApplicationsResponse extends Application {
    applicant: Applicant
    vacancy: Vacancy
}

export default async function ApplicationsTable() {
    // Запрос с подключением связанных данных (vacancy и applicant)
    const res = await fetch('http://localhost:3000/api/applications', {method: 'GET'})
    const applications: IApplicationsResponse[] = await res.json()

    return (
        <div className={styles.tableContainer}>
            <h2>Таблица заявок</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Код заявки</th>
                    <th>Фамилия соискателя</th>
                    <th>Название вакансии</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {applications.map((application) => (
                    <TableRow key={application.id} application={application}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}
