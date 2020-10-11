$('.cardButton').click(function(){
  projectID = event.target.id;
  if (projectID.includes("f")) {
    $(`#tl_${projectID.substring(2)}`).collapse("hide");
    $(`#ln_${projectID.substring(2)}`).collapse("hide");
  }

  if (projectID.includes("t")) {
    $(`#ft_${projectID.substring(2)}`).collapse("hide");
    $(`#ln_${projectID.substring(2)}`).collapse("hide");
  }

  if (projectID.includes("l")) {
    $(`#ft_${projectID.substring(2)}`).collapse("hide");
    $(`#tl_${projectID.substring(2)}`).collapse("hide");
  }
})
