window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");
  var msg_bcg = document.querySelector(".msg-bcg");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    msg_bcg.style.display = "block";
    status.classList.add("success");
    status.innerHTML = "Dziękujemy za wysłanie wiadomości!";
  }

  function error() {
    msg_bcg.style.display = "block";
    status.classList.add("error");
    status.innerHTML =
      "Niestety nie udało się wysłać wiadomości, spróbuj jeszcze raz lub prosimy zadzwoń do nas!";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

//eksperyment z tostem bootstrapa

// function success() {
//   form.reset();
//   status.classList.add("success");
//   status.innerHTML = `
//   <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
//   <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//   <div class="toast-header">
//     <img src="/images/favicon-32x32.png" class="rounded mr-2" alt="lewitarium_logo">
//     <strong class="mr-auto">Lewitarium.pl</strong>
//     <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//   <div class="toast-body">
//   Dziękujemy za wysłanie wiadomości! Odpowiemy najszybciej jak to możliwe.
//   </div>
// </div>
// </div>`;
// }

//eksperyment z tostem bootstrapa

// function error() {
//   status.classList.add("error");
//   status.innerHTML = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//     <div class="toast-header">
//       <img src="..." class="rounded mr-2" alt="...">
//       <strong class="mr-auto">Bootstrap</strong>
//       <small class="text-muted">11 mins ago</small>
//       <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="toast-body">
//     "Niestety nie udało się wysłać wiadomości, spróbuj jeszcze raz lub zadzwoń do nas!"
//     </div>
//   </div>`;
// }
