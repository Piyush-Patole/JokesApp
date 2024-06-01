const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({sxtended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/joke', async (req, res) => {
    const { name } = req.body;
    const url = 'https://v2.jokeapi.dev/joke/Any';

    try{
        const response = await axios.get(url);
        const joke = response.data;

        let jokeText;
        if( joke.type === 'single'){
            jokeText = joke.joke
        }else{
            jokeText = `${joke.setup} ... ${joke.delivery}`;
        }

        jokeText = jokeText.replace(/Chuck Norris/gi, name);

        res.render('joke', {
            name,
            joke: jokeText
        });
    } catch (error){
        console.error(error);
        res.status(500).send('Error retreiving joke')
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});