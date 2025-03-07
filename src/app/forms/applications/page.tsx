'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from '@/styles/Form.module.css'
import { StatusEnum } from '@/app/utils'

const FORMDATA_INIT = {
    applicant_id: 0,
    vacancy_id: 0,
    status: '',
}
export default function ApplicationForm() {
    const [vacancies, setVacancies] = useState<{ id: number, title: string, requirements: string }[]>([])
    const [applicants, setApplicants] = useState<{ id: number, lastname: string, experience: string }[]>([])
    const [formData, setFormData] = useState(FORMDATA_INIT)

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let value: string | number = e.target.value
        if (e.target.name !== 'status') value = Number(value)
        setFormData({...formData, [e.target.name]: value})
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await fetch('/api/applications', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            setFormData(FORMDATA_INIT)
            alert('Application added successfully!')
        }
    }

    useEffect(() => {
        fetch('/api/vacancies').then(res => {
            res.json().then(res => setVacancies(res))
        })
        fetch('/api/applicants').then(res => {
            res.json().then(res => setApplicants(res))
        })
    }, [])

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Добавить заявку</h2>
            <span>Соискатель</span>
            <select
                name="applicant_id"
                value={formData.applicant_id}
                onChange={handleSelectChange}
                required
            >
                <option value={0}>Не выбрано</option>
                {applicants.map(applicant => {
                    return <option key={applicant.id} value={applicant.id}>{applicant.lastname}</option>
                })}
            </select>
            <span>Вакансия</span>
            <select
                name="vacancy_id"
                value={formData.vacancy_id}
                onChange={handleSelectChange}
                required
            >
                <option value={0}>Не выбрано</option>
                {vacancies.map(vacancy => {
                    return <option key={vacancy.id} value={vacancy.id}>{vacancy.title}</option>
                })}
            </select>
            <span>Статус заявки</span>
            <select
                name="status"
                value={formData.status}
                onChange={handleSelectChange}
                required
            >
                <option value={0}>Не выбрано</option>
                {Object.keys(StatusEnum).map(key => <option key={key} value={key}>{StatusEnum[key]}</option>)}
            </select>
            <button type="submit">Добавить</button>
        </form>
    )
}