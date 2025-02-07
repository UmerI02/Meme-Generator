import image from './images/memeface.png'


export default function navbar(){
    return(
        <div className='navbar'>
            <img className='navbar--image' src={image}/>
                <span>Meme Generator</span>
                <p>React Course - Project 3</p>
        </div>
    )
}