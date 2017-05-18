### Synopsis

Creates a table view

### Usage
    
    app.view.showChildView('main', new TableView({
      collection: models,
      pageData: data.pageData,
      panelHeading: 'Panel Heading',
      template: require('./templates/table-view-template.html'),
      tableItemTemplate: require('./templates/model-view-template.html'),
      modalViewTemplate: require('./templates/model-modal-view-template.html')
    }))