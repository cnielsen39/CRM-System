import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('total');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Total entrepeneur');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('total/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveTotalEntrepeneur(newTotalEntrepeneur) {
      newTotalEntrepeneur.save().then(() => this.transitionTo('total'));
    }
  }
});