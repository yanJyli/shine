import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import Comments from './Comments';

export default class CollectionPost extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collection: [
                {
                    title: "Платья",
                    caption: "Коллекция стильных платьев",
                    img: ['/collection/dress/1.jpg',
                    '/collection/dress/2.jpg',
                    '/collection/dress/3.jpg',
                    '/collection/dress/4.jpg',
                    '/collection/dress/5.jpg', 
                    '/collection/dress/6.jpg', 
                    '/collection/dress/7.jpg', 
                    '/collection/dress/8.jpg',   
                    '/collection/dress/9.jpg',               
                    ],
                    likes: 16,
                    comments:[{text:'очень красивые платья', username:"tanya562"},
                    {text:'качественно и очень красиво', username:"mariaTas"},
                    {text:'очень понравилось светлое платье', username:"girl258"}],
                },
                {
                    title: "Костюмы",
                    caption: "Коллекция стильных костюмов",
                    img: ['/collection/suit/1.jpg',
                    '/collection/suit/2.jpg',
                    '/collection/suit/3.jpg',
                    '/collection/suit/4.jpg',
                    '/collection/suit/5.jpg',
                    '/collection/suit/6.jpg',                
                    ],
                    likes: 13,
                    comments:[{text:'классные расцветки костюмов', username:"vikToria3"},
                    {text:'можно ли купить блузку отдельно?', username:"ladyMiss"},
                    {text:'юбка очень шикарная!', username:"lena456"}],
                },
                {
                    title: "Спортивная одежда",
                    caption: "Коллекция спортивной одежды",
                    img: ['/collection/sport/1.jpg', 
                        '/collection/sport/2.jpg',
                        '/collection/sport/3.jpg',
                        '/collection/sport/4.png'],
                    likes: 10,
                    comments:[{text:'очень стильные платья!', username:"lilya"},
                    {text:'мне очень понравился костюм', username:"anna123"},
                    {text:'красиво, а главное удобно', username:"kateIv"},],
                },
            ],
        }

        this.commentInputRef = React.createRef();
    }

    handleLikeClick = () => {
        const {collection} = this.state;
        this.setState({
            collection: {
            ...collection,  
            likes: this.state.likes + 1,
        },
        })
    }

    handleCommentClick = () => {
        this.commentInputRef.current.focus();
    }

    handleAddComment = (text) => {
        const {collection} = this.state;
        this.setState({
            collection: {
            ...collection,  
            comments: [...collection.comments, {text, username: 'yanJyli'}],
        },
        })
    }

    render() {
        const {collection} = this.state;
        return (
            <div className='bg-white max-w-screen-lg grid mx-auto '> { collection.map((item) => (
                <div key={item} className='m-4 '>
                    <p className='text-xl font-bold'>{item.title}</p>
                    <p className='text-base'>{item.caption}</p>
                    <div className='m-2 flex overflow-x-scroll '>{item.img.map((i) => (
                        
                            <img src={`${process.env.PUBLIC_URL}/${i}`} alt='img' className="m-1 w-1/4 "/>
                        
                    ))}</div>
                    <Actions likes={item.likes} onLikeClick={this.handleLikeClick} onCommentClick={this.handleCommentClick}/>
                    <Comments comments={item.comments} commentInput={this.commentInputRef} onAddComment={this.handleAddComment} />
                </div>
                ))}
            </div>
        )
    }
}