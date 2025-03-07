'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import styles from '../../../styles/Form.module.css'

const FORMDATA_INIT = {lastname: '', experience: ''}
export default function ApplicantForm() {
    const [formData, setFormData] = useState(FORMDATA_INIT)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await fetch('/api/applicants', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            setFormData(FORMDATA_INIT)
            alert('Applicant added successfully!')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Добавить соискателя</h2>
            <input
                type="text"
                name="lastname"
                placeholder="Фамилия"
                value={formData.lastname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="experience"
                placeholder="Опыт работы"
                value={formData.experience}
                onChange={handleChange}
                required
            />
            <button type="submit">Добавить</button>
        </form>
    )
}