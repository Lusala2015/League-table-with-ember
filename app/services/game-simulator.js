import Service from '@ember/service';
import { inject } from '@ember/service';
import { later } from '@ember/runloop';
import { shuffle } from 'ember-composable-helpers/helpers/shuffle';

export default Service.extend( {
    store: inject(),
    init(){
        this._super(...arguments);

        console.log("games simu...");

        this.seedTeams();

        later(this, this.simulateGame, 1000);
    },

    seedTeams(){
        let teamNames = ['Manchester United','team1','team2','team3','team4','team5','team6',];

        for(let i =0; i<teamNames.length; i++){
            this.store.createRecord('team',{ id: i ,name: teamNames [i]} );
        }

    },

    simulateGame(){
        let teams = this.store.peekAll('teams'); 

        let shuffledTeams = shuffle(teams);

        let homeTeam = shuffledTeams[0];
        let awayTeam = shuffledTeams[1];

        debugger;
    }
});