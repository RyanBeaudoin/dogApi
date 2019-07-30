'use strict';

function getDogImage(numInput) {
if (numInput < 1) {
  return alert("Please choose a number equal or more than 1");
} else if (numInput > 50) {
  return alert("Please choose a number equal or less than 50");
} else {
  fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
}
}

function displayResults(responseJson) {
  console.log(responseJson);
  let imgStr = '';
  responseJson.message.forEach((image)=>{
    imgStr+=`<img src="${image}"class="results-img"></img>`
  });
  //replace the existing image with the new one
  $('.results-img').replaceWith(imgStr);
  console.log(imgStr);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userNumInput = $(".quantity").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
