import DS from 'ember-data';

export default DS.Model.extend({
    homeTeam: DS.belongsTo('team', { inverse: 'homeGames'}),
    awayTeam: DS.belongsTo('team', { inverse: 'awayGames'}),
    homeGoals: DS.attr('number'),
    homeGoals: DS.attr('number'),
    playedOn: DS.attr('date')
});
