import { Header, Hero, CardList, About, Contact, Footer } from './Card'

const items = [
  { title: 'Магазин одежды', text: 'Каталог, корзина и оплата.', tag: 'Сайт' },
  { title: 'Кофейня', text: 'Меню и онлайн заказ.', tag: 'Лендинг' },
  { title: 'Заметки', text: 'Приложение для списков и идей.', tag: 'Приложение' },
  { title: 'Фотограф', text: 'Портфолио с галереей.', tag: 'Сайт' },
  { title: 'Фитнес клуб', text: 'Расписание и запись.', tag: 'Сервис' },
  { title: 'Блог', text: 'Статьи о дизайне.', tag: 'Сайт' }
]

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <CardList items={items} />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
