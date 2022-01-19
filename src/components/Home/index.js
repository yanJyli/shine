import React, { Component } from 'react';

import Header from '../Header';
import Image from './Image';
import Footer from '../Footer';
import Img1 from '../img/post/1.png';
import Img2 from '../img/post/2.png';
import Img3 from '../img/post/3.png';
import Img4 from '../img/post/4.png';
import Img5 from '../img/post/5.png';
import Img6 from '../img/post/6.png';
import Img7 from '../img/post/7.png';
import Img8 from '../img/post/8.png';
import Img9 from '../img/post/9.png';
export default class MainPage extends Component {
    render() {
        return (
            <>
                <Header />

                <div className='bg-white max-w-screen-lg mx-auto'>
                
                    <h1 className='text-2xl place-content-center flex p-8'>Узнаваемый стиль | Женская одежда | Уникальный стиль</h1>
                
                    <div className=' flex place-content-center'>
                        <Image src={Img1} />
                        <Image src={Img2} />
                        <Image src={Img3} />
                    </div>

                    <p className='mt-8 p-4 text-lg'>Узнаваемый стиль - это то, что отличает вас от других брендов, это те элементы, по которым вас будут идентифицировать. Уникальность может быть в конструкциях, в формах и комбинациях, в сочетании цветов, используемых принтов, сталинге, узнаваемых элементы, в используемых тканях или текстуре, в правильном логотипе. Приглашаю всех ко мне на страничку, я уверена , каждая найдёт что-то для себя непременно.</p>

                    <div className=' flex place-content-center'>
                        <Image src={Img4} />
                        <Image src={Img5} />
                        <Image src={Img6} />
                    </div>
                
                    <p className='mt-8 p-4 text-lg'>Будучи ярой шмоточницей, я всегда заполняла шкафы всевозможной одеждой : начиная от классики до тотал-спорт. Один день на каблуках, второй в кроссовках, а ещё лучше сменить несколько образов за день - это все про меня. Но я никогда не делала необдуманные покупки, все вещи я носила и ношу до последнего. Я незаметно стала фанатом интересных покроев, всегда в поиске моделей с фишкой (дайте больше «изюма»), не люблю покупать однотипное, что у меня есть или было. Благодаря этому качеству у меня выработался свой стиль. И у моих знакомых при виде определенных моделей сразу появляется ассоциация со мной. - « О да, Вика бы надела.»</p>

                    <div className=' flex place-content-center'>
                        <Image src={Img7} />
                        <Image src={Img8} />
                        <Image src={Img9} />
                    </div>
                    
                    <p className='mt-8 p-4 text-lg'>А с каждым годом мне все сложнее найти себе по вкусу - все было, все не то. Многие девочки конечно меня поймут. Поэтому я решила запустить свою линейку одежды @shine_belarus , где вы не найдёте простоты, а только самое интересное на каждый день и не только. Дизайнер рассказывает свое видение моды и стиля через продукт. Коллекция - это продолжение дизайнера, а элементы дизайна, стиля, материалы и подача  - это способы коммуникации дизайнера с его аудиторией. Сияй-сияй-сияй!</p>
                
                </div>       

                <Footer />
            </>
        )
    }
}
