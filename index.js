import express from 'express';

const app = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
]

app.get("/holidays", (request, response) => {
    response.send(holidays);
})

app.get("/is-today-holiday", (request, response) => {
    const date = new Date();
    const today = date.toLocaleDateString('en-US');
    for (let i = 0; i < holidays.length; i++) {
        if(holidays[i].date === today) {
            response.send(`Sim, hoje é ${holidays[i].name}`);
        } else {
            response.send("Não, hoje não é feriado");
        }
    }
})

app.get(`/holidays/:userID`, (request, response) => {
    let id = request.params.userID;
    const monthHolidays = [];
    for (let i = 0; i < holidays.length; i++) {
        if(holidays[i].date.startsWith(id) === true) {
            monthHolidays.push(holidays[i]);
        }
    }
    response.send(monthHolidays);
})

app.listen(4000, () => {
    console.log("server is running on port 4000");
  })