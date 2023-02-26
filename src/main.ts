import axios from 'axios';

const catFact = 'https://catfact.ninja/fact';

Promise.all([
  axios.get(catFact)
])
  .then(responses => {
    const fact = responses[0].data.fact;
    console.log(fact)
  })
  .catch(error => console.log('error', error));