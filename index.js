function setThemePreference() {
  let d = new Date();
  /*
  * The getHours() method returns the hour (from 0:00 to 23:59) of the specified date and time.
  * Early morning = 0:00 - 6:59
  * Morning = 7:00 - 12:00
  * Afternoon = 12:01 - 17:59
  * Night = 18:00 - 23:59
  */
  let currentHour = d.getHours();

  if ( currentHour >= 19 || currentHour <= 7 ) {
    document.body.setAttribute("data-theme", "dark_theme") 
  } else {
    document.body.setAttribute("data-theme", "light_theme") 
  }
}

window.onload = setThemePreference;