$(document).ready(() => {

  $("#submit-btn").on('click', (event) => {
    
    const string = $('#string').val();
    $('#string').val('');

    const data = { string };
    fetch('/strings', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then((res) => {
      renderToPage(res);
    })
  });

  const renderToPage = (strings) => {
    $(".table").html('');
    $(".table").append(`
      <div class="box">Sorted</div> 
      <div class="box">Unsorted</div>
    `)

    for (let i = 0; i < strings.sorted.length; i++) {
      let $row = $(`
      <div class="row">
      <div class="box">${strings.sorted[i]}</div> 
      <div class="box">${strings.unsorted[i]}</div>
      </div>
      `);
      $(".table").append($row)
    }
  }





})