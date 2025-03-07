import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href={'/forms/applicants'} style={{textDecoration: 'none', background: '#2c3e50', width: 'fit-content', padding: '5px 10px', borderRadius: '10px'}}>Добавить соискателя</Link>
      <Link href={'/forms/vacancies'} style={{textDecoration: 'none', background: '#2c3e50', width: 'fit-content', padding: '5px 10px', borderRadius: '10px'}}>Добавить вакансию</Link>
      <Link href={'/forms/applications'} style={{textDecoration: 'none', background: '#2c3e50', width: 'fit-content', padding: '5px 10px', borderRadius: '10px'}}>Добавить заявку</Link>
    </div>
  );
}
