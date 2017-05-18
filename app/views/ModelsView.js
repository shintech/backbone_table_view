import TableRowView from './TableRowView'

const ModelsView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: TableRowView,
  initialize: function (options) {
    this.template = options.template
  },
  childViewOptions: function () {
    const template = this.template

    return {
      template: template
    }
  }

})

export default ModelsView
