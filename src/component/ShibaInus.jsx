import React from "react";

const ShibaInus = () => {
    const[shibaInus, setShibaInus] = React.useState([]);
    // initialize objects that contain the state of the website, toggle true or flase (initially false)
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
    //var images = [];
    

    // this component only runs after the website renders
    React.useEffect(() => {
        // random number generator, generates random amount of images selected from 1-30
        const imgAmount = Math.floor(Math.random()*30)+1;

        // uses fetch from react.js library, makes a GET request to the shibe.online API
        // recieves a JSON response of random images in an array
        fetch(
            `https://shibe.online/api/shibes?count=${imgAmount}&urls=true&httpsUrls=true`
        )
            //used lambda function in order to log the result while testing
            .then((res) => {
                //console.log(res);
                return res.json();
            })
            .then((json) => {
                console.log(json);
                //images = json;
                //console.log(images[0]);
                setShibaInus(json);
                setIsDataLoaded(true);
            });
    }, []);

    if(!isDataLoaded){
        return(
            <div>
                <h1>Hold on, your shibes are still on their way...</h1>
            </div>
        );
    }

    return(
        <div className="shibainus">
            <h1>Here is your daily dose of Shiba Inus.</h1>
            <h2>A random selection of shibes has been chosen just for you.</h2>
            {shibaInus?.map((item) => (
                <div key={item.id}>
                <img src = {item} alt ="a shiba inu to brighten your day" width="800"/>
                </div>
            ))}
        </div>
    );
};

// exporting the ShibaInus jsx so other files are able to see it
export default ShibaInus;