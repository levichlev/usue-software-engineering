import Link from 'next/link';

export default function TablesPage() {
    return (
        <div>
            <h1>Таблицы</h1>
            <ul>
                <li><Link href="/tables/vacancies">Вакансии</Link></li>
                <li><Link href="/tables/applicants">Соискатели</Link></li>
                <li><Link href="/tables/applications">Заявки</Link></li>
            </ul>
        </div>
    );
}