$(document).ready(function() {
  $.getJSON('/news/us', function(data) {
    data.forEach(article => {
      $('#us-news ul').append(`<li><a href="${article.url}">${article.title}</a></li>`);
    });
  });

  $.getJSON('/news/pt', function(data) {
    data.forEach(article => {
      $('#pt-news ul').append(`<li><a href="${article.url}">${article.title}</a></li>`);
    });
  });

  $.getJSON('/news/tech', function(data) {
    data.forEach(article => {
      $('#tech-news ul').append(`<li><a href="${article.url}">${article.title}</a></li>`);
    });
  });
});
