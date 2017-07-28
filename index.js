import ModelsView from './app/views/ModelsView'
import ModelModalView from 'backbone_modal_view'
import UpdateFormView from './app/views/UpdateFormView'
import Pagurbate from 'pagurbate'

const modelModalView = new ModelModalView()
const updateFormView = new UpdateFormView()

const TableView = Backbone.Marionette.View.extend({
  tagName: 'div',

  className: 'panel panel-primary',

  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    },

    footer: {
      el: '.panel-footer'
    }
  },

  events: {
    'mouseover .table-header': 'mouseoverHeader',
    'mouseout .table-header': 'mouseoutHeader',
    'mouseover .table-row': 'mouseoverRow',
    'mouseout .table-row': 'mouseoutRow',
    'contextmenu .table-row': 'rightClickRow',
    'click .table-row': 'handleClick'
  },

  initialize: function (options) {
    this.pageData = options.pageData
    this.panelHeading = options.panelHeading
    this.template = options.template
    this.tableItemTemplate = options.tableItemTemplate

    modelModalView.template = options.modalViewTemplate
    updateFormView.template = options.updateFormTemplate
  },

  serializeData: function () {
    return {
      'panelHeading': this.panelHeading
    }
  },

  onRender: function () {
    this.showChildView('body', new ModelsView({ collection: this.collection, template: this.tableItemTemplate }))
    this.showChildView('footer', new Pagurbate({ pageData: this.pageData }))
  },

  handleClick: function (e) {
    const id = $(e.currentTarget).data('id')
    const model = this.collection.get(id)

    modelModalView.model = model

    modelModalView.$el.on('contextmenu', function (e) {
      e.preventDefault()
      modelModalView.$el.click()
    })

    modelModalView.render()
  },

  mouseoverHeader: function (event) {
    $(event.currentTarget).css({'background-color': 'lightgrey', 'cursor': 'pointer'})
  },

  mouseoutHeader: function (event) {
    $(event.currentTarget).css('background-color', 'rgb(231, 231, 230)')
  },

  mouseoverRow: function (event) {
    $(event.currentTarget).css({'background-color': 'rgb(255, 255, 117)', 'cursor': 'pointer'})
  },

  mouseoutRow: function (event) {
    $(event.currentTarget).css('background-color', '')
  },

  rightClickRow: function (e) {
    e.preventDefault()
    const id = $(e.currentTarget).data('id')
    const model = this.collection.get(id)

    updateFormView.model = model
    updateFormView.collection = this.collection

    updateFormView.$el.on('contextmenu', function (e) {
      e.preventDefault()
      updateFormView.$el.click()
    })

    updateFormView.render()
    return false
  }

})

export default TableView
