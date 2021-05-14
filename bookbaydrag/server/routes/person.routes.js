const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
//Performer API calls to DB
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getOnePerson);
    app.post('/api/createPerson', PersonController.createPerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);
}