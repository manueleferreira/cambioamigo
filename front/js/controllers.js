$( function() {
    $( "#tabs" ).tabs();
} );

var clients = [
    { "Name": "Otto Clay", "Cidade":"Rio de Janeiro", "Moeda": "Dolar", "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Connor Johnston", "Cidade":"São Paulo", "Moeda": "Euro", "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Lacey Hess", "Cidade":"Rio de Janeiro", "Moeda": "Dolar", "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Timothy Henson", "Cidade":"Rio de Janeiro", "Moeda": "Euro", "Cotação": "R$3,50", "Quantidade": 200 },
    { "Name": "Ramona Benton", "Cidade":"Rio de Janeiro", "Moeda": "Dolar", "Cotação": "R$3,50", "Quantidade": 200 }
];

$("#jsGrid").jsGrid({
    width: "100%",
    height: "300px",

    data: clients,

    fields: [
        { name: "Name", type: "text", validate: "required", width:100 },
        { name: "Cidade", type: "text", validate: "required" },
        { name: "Moeda", type: "text", validate: "required" },
        { name: "Cotação", type: "text", width:80 },
        { name: "Quantidade", type: "number", width:80 },
        {
            itemTemplate: function(_, item) {
                return $("<button>").text("Pegar Trokado!")
                    .on("click", function() {
                        alert(item.Name);
                    });
            }
        }
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