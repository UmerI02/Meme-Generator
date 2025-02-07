import react from "react";

export default function Main(){

    const [allMemes,setAllMemes]=react.useState([])
    react.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])
    const [meme,setMeme]=react.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    
    function clickHandler(){
        let randomNumber = Math.floor(Math.random() * allMemes.length);
        let url=allMemes[randomNumber].url    
        setMeme(prevMeme=>{return{
            ...prevMeme,
            randomImage:url
        }})
    }
    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <div className="main--page">
            <div className="input--text">
        <input type="text" placeholder="Top Text" name="topText" onChange={handleChange}/>
        <input type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange}/>
        </div>
        <div className="submit"><button onClick={clickHandler}>Get a new meme image 🖼️</button></div>
        <div className="result"><img src={meme.randomImage}></img>
        <h1 className="top">{meme.topText}</h1>
        <h1 className="bottom">{meme.bottomText}</h1></div>
        </div>
    )
}