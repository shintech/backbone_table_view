### Synopsis

Creates a table view

### Usage

#### controller.js
    
    app.view.showChildView('main', new TableView({
      collection: models,
      pageData: data.pageData,
      panelHeading: 'Panel Heading',
      template: require('./templates/table-view-template.html'),
      tableItemTemplate: require('./templates/model-view-template.html'),
      modalViewTemplate: require('./templates/model-modal-view-template.html')
    }))
    

#### table-view-template.html

    <div class="panel-heading">
      <%- panelHeading %>
    </div>
    
    <div class='panel-body container-fluid' id='wrapper'>
      <table class="table">
        <thead>
          <tr>
            <th id="name" class="table-header">Name</th>
            <th id="attribute" class="table-header">Attribute</th>
            <th id="created_at" class="table-header">Created At</th>
          </tr>
        </thead>
        
        <tbody></tbody>
      </table>
      
      <div class='panel-footer'></div>
    </div>
  
#### modal-view-template.html
  
    <td><%- name %></td>
    <td><%- attribute %></td>
    <td><%- created_at %></td>
    
#### model-modal-view-template.html

    <div class="modal-dialog">
    
      <div class="modal-content">
      
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3 class="modal-title"><%= name %></h3>
        </div>
        
        <div class="modal-body">
          <ul>
            <li><strong>Attribute:</strong> <%- attribute %></li>
            <li><strong>Created At:</strong> <%- created_at %></li>
          </ul>
        </div>
        
        <div id='task-modal-footer' class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>