import Link from 'next/link'

export default function FormsPage() {
    return (
        <div>
            <h1>Формы</h1>
            <ul>
                <li><Link href="/forms/vacancies">Вакансии</Link></li>
                <li><Link href="/forms/applicants">Соискатели</Link></li>
                <li><Link href="/forms/applications">Заявки</Link></li>
            </ul>
        </div>
    )
}