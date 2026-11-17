import { useState } from 'react'

export function Header() {
  return (
    <header className="header">
      <span className="logo">Студия</span>
      <nav>
        <a href="#cards">Работы</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <h1>Простые вещи, сделанные хорошо</h1>
      <p>Небольшая команда, которая делает сайты и приложения без лишнего.</p>
    </section>
  )
}

export function Card({ title, text, tag }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="card">
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Нравится' : 'Отметить'}
      </button>
    </div>
  )
}

export function CardList({ items }) {
  return (
    <section id="cards" className="section">
      <h2>Работы</h2>
      <div className="grid">
        {items.map((item) => (
          <Card key={item.title} title={item.title} text={item.text} tag={item.tag} />
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="section">
      <h2>О нас</h2>
      <p className="about-text">
        Мы работаем с 2020 года. Делаем понятные интерфейсы и стараемся,
        чтобы каждая страница была удобной и быстрой.
      </p>
    </section>
  )
}

export function Contact() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section id="contact" className="section">
      <h2>Контакты</h2>
      {sent ? (
        <p>Спасибо, мы скоро напишем.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Отправить</button>
        </form>
      )}
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>2026 Студия</p>
    </footer>
  )
}
