import {useEffect, useState} from "react"

//id, size ,x ,y, opacity ,animation
//id, size ,x ,y,delay,animation
    export const StarBackground =() =>{
const [stars ,setStars] = useState([]);
 const [Meteors ,setMeteors] = useState([]);   
 
useEffect(() =>{
generteStars();
generteMeteors();

const handleResize = () => {
    generteStars();
};

window.addEventListener ( "resize", handleResize);

return () => window.removeEventListener("resize", handleResize);
},[]);


const generteStars = () => {
    const numberOfStars = Math.floor(
       ( window.innerWidth * window.innerHeight )/ 10000
 );

const newStars = [];

for (let i = 0; i < numberOfStars; i++ ){
newStars.push({
        id:i,
        size: Math.random() * 3 + 1,
x :Math.random() * 100,
y :Math.random() * 100, 
opacity: Math.random () * 0.5 + 0.5 ,
animationduration:Math.random() * 4 + 2 ,
    });
}

setStars(newStars)
};

const generteMeteors = () => {
    const numberOfMeteors = 4;
const newMeteors = [];

for (let i = 0; i < numberOfMeteors; i++ ){
newMeteors.push({
        id:i,
        size: Math.random() * 2 + 1,
x :Math.random() * 100,
y :Math.random() * 20, 
delay: Math.random () * 15 ,
animationduration:Math.random() * 3 + 3 ,
    });
}

setMeteors(newMeteors)
};

    return( <div className="fixed inset-0  overflow-hidden pointer-events-none z-0">
        {stars.map((star) =>(
            <div key = { star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px" ,
                height: star.size + "px" ,
                left: star.x + "%" ,
                top: star.y + "%" ,
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}

           {Meteors.map((meteor) =>(
            <div key = {meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px" ,
                height: meteor.size * 2 + "px" ,
                left: meteor.x + "%" ,
                top: meteor.y + "%" ,
                animationDelay: meteor.Delay,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}
    </div>
    );
};