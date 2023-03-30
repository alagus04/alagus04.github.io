$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/alagus04/alagus04.github.io/master/information.json", function(data) {
        addProjects(data.projects);
    })
  });

  function addProjects(projects) {
    $.each(projects, function(i, val) {
      link = ""
      gh_link = ""
  
      if (val['link']) {
        link = `<a href="${val.link}" target="_blank"><i class="fa fa-arrow-up-right-from-square"></i></a>`;
        console.log(link)
      }
      if (val['gh_link']) {
        gh_link = `<a href="${val['gh-link']}" target="_blank rel="noreferrer noopener"><i class="fa-brands fa-github"></i></a>`;
      }
  
      text = `<li class='project'><h4>${val.title}${link}${gh_link}</h4><p class="location">${val.location}</p><p class="date">${val.date}</p><p class="description">${val.description}</p></li>`;
      $("#projects > ul").append(text);
    })
}