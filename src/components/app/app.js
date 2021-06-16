import Header from '../header'
import Footer from '../footer'
import css from './app.module.css'

function App() {
    return (
        <div className={css.app}>
            <Header/>
            <Footer/>
        </div>
    )
}

export default App