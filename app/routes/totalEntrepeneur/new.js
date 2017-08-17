import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('totalEntrepeneur');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('totalEntrepeneur/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveTotalEntrepeneur(newTotalEntrepeneur) {
      newTotalEntrepeneur.save().then(() => this.transitionTo('totalEntrepeneur'));
    }
  }
});