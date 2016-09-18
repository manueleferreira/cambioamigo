$( function() {
    $( "#tabs" ).tabs();
} );

var clients = [
    { "Name": "Otto Clay", "Cidade":"Rio de Janeiro", "Moeda": 1, "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Connor Johnston", "Cidade":"São Paulo", "Moeda": 2, "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Lacey Hess", "Cidade":"Rio de Janeiro", "Moeda": 3, "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Timothy Henson", "Cidade":"Rio de Janeiro", "Moeda": 1, "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Ramona Benton", "Cidade":"Rio de Janeiro", "Moeda": 3, "Cotação": "R$3,50", "Quantidade": 200 }
];

var currencies = [
    { Name: "", Id: 0 },
    { Name: "Dolar", Id: 1 },
    { Name: "Euro", Id: 2 },
    { Name: "Libra", Id: 3 }
];

$("#jsGrid").jsGrid({
    width: "100%",
    height: "400px",

    editing: true,
    sorting: true,
    paging: true,

    data: clients,

    fields: [
        { name: "Name", type: "text", validate: "required" },
        { name: "Cidade", type: "text", validate: "required" },
        { name: "Moeda", type: "select", items: currencies, valueField: "Id", textField: "Moeda" },
        { name: "Cotação", type: "text" },
        { name: "Quantidade", type: "number" }
    ]
});

$('ul.tabs').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});