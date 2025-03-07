'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import styles from '@/styles/Form.module.css'

const FORMDATA_INIT = {title: '', requirements: ''}

export default function VacancyForm() {
    const [formData, setFormData] = useState(FORMDATA_INIT)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await fetch('/api/vacancies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            setFormData(FORMDATA_INIT)
            alert('Vacancy added successfully!')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Добавить вакансию</h2>
            <input
                type="text"
                name="title"
                placeholder="Название вакансии"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="requirements"
                placeholder="Требования"
                value={formData.requirements}
                onChange={handleChange}
                required
            />
            <button type="submit">Добавить</button>
        </form>
    )
}