
function searchFunction() {
  // Declare variables
  // var input, filter, ul, li, a, i;
  // input = document.getElementById('myinput');
  // filter = input.value.toUpperCase();
  // th = document.getElementById('wrapper');
  // td = ul.getElementsByTagName('td');

  // // Loop through all list items, and hide those who don't match the search query
  // for (i = 0; i < td.length; i++) {
  //   a = td[i].getElementsByTagName('a')[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }

  var listItem = document.getElementById( "vendor-name" );
  alert( "Index: " + $( "td" ).index( listItem ) );
}

