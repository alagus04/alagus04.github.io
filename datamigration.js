$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/alagus04/alagus04.github.io/master/info.json", function(data) {
      addSocials(data.socials);
    })
  });

function addSocials(socials) {
  $.each(socials, function(i, val) {
    $("#connect > ul").append("<li><a href='" + val.link + "' target='_blank'><i class='" + val.icon + "'></i>");
  })
}