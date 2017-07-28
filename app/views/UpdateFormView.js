const UpdateFormView = Backbone.Marionette.View.extend({
  tagName: 'div',

  className: 'modal fade hidden',

  id: 'update-modal',

  events: {
    'click .submit-button': 'submitForm'
  },
  onRender: function () {
    this.$el.modal('show').removeClass('hidden')
  },

  submitForm: function (e) {
    e.preventDefault()
    Backbone.Validation.bind(this, {
      model: this.model
    })

    var modelAttrs = {
      name: $('#name_input').val(),
      attribute: $('#attribute_input').val()
    }

    this.model.set(modelAttrs)
    if (this.model.isValid(true)) {
      this.model.url = 'https://dev.shintech.ninja:8443/api/models/' + this.model.get('id')
      this.model.save({
        success: function (model, response) {
          console.log(response)
        }
      })
      this.collection.add(this.model)
      this.$el.modal('hide')
      return false
    }
  }

})

export default UpdateFormView
