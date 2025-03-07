import Link from 'next/link'
import styles from '../styles/Header.module.css'
import './globals.css'
import { ReactElement } from 'react'

export default function RootLayout({children}: { children: ReactElement }) {
    const menu = [
        {
            name: 'Заполнение данных',
            address: 'forms',
            children: [{name: 'Добавить вакансию', address: 'vacancies'}, {
                name: 'Добавить соискателя',
                address: 'applicants',
            }, {name: 'Создать заявку', address: 'applications'}],
        },
        {
            name: 'Просмотр данных',
            address: 'tables',
            children: [{name: 'Вакансии', address: 'vacancies'}, {
                name: 'Соискатели',
                address: 'applicants',
            }, {name: 'Заявки', address: 'applications'}],
        },
        {
            name: 'Просмотр отчетов',
            address: 'reports',
            children: [{name: 'По вакансиям', address: 'by-vacancies'}, {
                name: 'По соискателям',
                address: 'by-applicants',
            }],
        },
    ]

    return (
        <html lang="en">
        <body>
        <header className={styles.header}>
            <nav>
                {menu.map((section) => (
                    <div key={section.name} className={styles.section}>
                        <span>{section.name}</span>
                        <ul>
                            {section.children.map((item) => (
                                <li key={item.address}>
                                    <Link style={{textDecoration: 'none', color: 'white'}}
                                          href={`/${section.address}/${item.address}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </header>
        <main>{children}</main>
        </body>
        </html>
    )
}