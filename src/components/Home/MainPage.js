import React, { Component } from 'react';

import Header from '../Header';
import Post from './Post';
import Footer from '../Footer';

import MainImg1 from '../img/post/main1.png';
import MainImg2 from '../img/post/main2.png';
import MainImg3 from '../img/post/main3.png';


export default class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <Post src={MainImg1} text='Будучи ярой шмоточницей, я всегда заполняла шкафы всевозможной одеждой : начиная от классики до тотал-спорт. Один день на каблуках, второй в кроссовках, а ещё лучше сменить несколько образов за день - это все про меня. Но я никогда не делала необдуманные покупки, все вещи я носила и ношу до последнего. Я незаметно стала фанатом интересных покроев, всегда в поиске моделей с фишкой (дайте больше «изюма»), не люблю покупать однотипное, что у меня есть или было. Благодаря этому качеству у меня выработался свой стиль. И у моих знакомых при виде определенных моделей сразу появляется ассоциация со мной. - « О да, Вика бы надела.»'/>
                </div>
                <div>
                    <Post src={MainImg2} right={'place-content-end'} text='А с каждым годом мне все сложнее найти себе по вкусу - все было, все не то. Многие девочки конечно меня поймут. Поэтому я решила запустить свою линейку одежды @shine_belarus , где вы не найдёте простоты, а только самое интересное на каждый день и не только. Дизайнер рассказывает свое видение моды и стиля через продукт. Коллекция - это продолжение дизайнера, а элементы дизайна, стиля, материалы и подача  - это способы коммуникации дизайнера с его аудиторией. '/>
                </div>
                <div>
                    <Post src={MainImg3} text='Узнаваемый стиль - это то, что отличает вас от других брендов, это те элементы, по которым вас будут идентифицировать. Уникальность может быть в конструкциях, в формах и комбинациях, в сочетании цветов, используемых принтов, сталинге, узнаваемых элементы, в используемых тканях или текстуре, в правильном логотипе. Приглашаю всех ко мне на страничку, я уверена , каждая найдёт что-то для себя непременно. Сияй-сияй-сияй!'/>
                </div>        

                <Footer />
            </>
        )
    }
}