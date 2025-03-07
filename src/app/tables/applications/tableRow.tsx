'use client'
import { useState } from 'react'
import { StatusEnum } from '@/app/utils'

export function TableRow({application}: { application: any }) {
    const [isEditing, setIsEditing] = useState(false)
    const [status, setStatus] = useState<string>(application.status)

    const handleSave = async () => {
        try {
            // Отправляем запрос на обновление статуса
            const response = await fetch(`/api/applications/${application.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status}),
            })

            if (response.ok) {
                setIsEditing(false) // Закрываем режим редактирования
            } else {
                alert('Ошибка при обновлении статуса')
            }
        } catch (error) {
            console.error('Ошибка:', error)
        }
    }

    return (
        <tr>
            <td>{application.id}</td>
            <td>{application.applicant.lastname}</td>
            <td>{application.vacancy.title}</td>
            <td>
                {isEditing ? (
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="created">Создана</option>
                        <option value="due_interview">Ожидает собеседования</option>
                        <option value="accepted">Принята</option>
                        <option value="rejected">Отклонена</option>
                    </select>
                ) : (
                    StatusEnum[status]
                )}
            </td>
            <td>
                {isEditing ? (
                    <button onClick={handleSave}>Сохранить</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                )}
            </td>
        </tr>
    )
}