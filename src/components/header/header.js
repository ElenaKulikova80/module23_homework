import css from './header.module.css';
import logo from './SkillDrive.svg';

export default function Header(){
    return (
        <header clasName={css.menu}>
            <a className={css.logo} href="https://skillfactory.ru/" >
                <img src={logo} alt="SkillDrive"/>
            </a>
        </header>
    )
}

{/* <header class="menu">
          <a class="menu__logo" href="https://skillfactory.ru/" ><img src="src/img/SkillDrive.svg" alt="SkillDrive"></a> 
          <nav class="menu__frame is-desktop">     
               <a class="menu__frame-item" href="">О нас</a>
               <a class="menu__frame-item" href="">Условия</a>
               <a class="menu__frame-item" href="module19.html">Частые вопросы</a>
          </nav>     
          <button class="menu__button is-desktop">Войти</button>
          <div class="mobile__burger is-mobile">
               <img src="src/img/burger.svg" alt="Мобильное меню">
          </div>
          <div class="menu__mobile is-mobile is-animated">
               <a class="menu__mobile-logo" href="https://skillfactory.ru/" >
                    <img src="src/img/SkillDrive.svg" alt="SkillDrive"></a>
               <span class="menu__mobile-close"><img src="src/img/close.svg" alt="ВКонтакте"></span>
               <nav class="menu__mobile-wrapper">
                    <a class="menu__mobile-item" href="module17.html">О нас</a>
                    <a class="menu__mobile-item" href="">Условия</a>
                    <a class="menu__mobile-item" href="module19.html">Частые вопросы</a>       
               </nav>   
               <div class="menu__mobile-btn_cont">
                    <button class="menu__mobile-button">Войти</button>
               </div>         
          </div>
     </header> */}