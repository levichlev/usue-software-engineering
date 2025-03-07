import Link from 'next/link';

export default function ReportsPage() {
    return (
        <div>
            <h1>Отчеты</h1>
            <ul>
                <li><Link href="/reports/by-vacancies">По вакансиям</Link></li>
                <li><Link href="/reports/by-applicants">По соискателям</Link></li>
            </ul>
        </div>
    );
}