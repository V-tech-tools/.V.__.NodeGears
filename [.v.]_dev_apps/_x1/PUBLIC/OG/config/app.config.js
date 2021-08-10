// Main Application Configuration/Variables File 
//
//  File Name: [src/config/] app.config.js
//  Description: 
//      Well...many variables in charge of running the app. Some of those for example would be application name,
//      app status [like loading], current page...etc. Also parts will be added as app loads and figures out stuff
//      like device, screen size, page hystory and more.
//  Requires: [---]
//  Author: Slavko V.
//  Url: #
//
//----------------------------------------------------
//
//  TABLE OF CONTENT:
//  1. mainApp -> main app variable[object]
//>     1. name -> Application Name
//>     2. status -> Current App Status
//>     3. page -> Currently Open [to-open] page
//>     4. bench -> [ShortBurstTimedBenchmark] Short device benchmark results before setting up video options
//  2. appPages -> contains actual pages data like which css and js to load while also what text and img to use
//      1. homePage
//      2. aboutGame
//      3. aboutAuthor
//      4. loginPage
//      5. gamePage
//
//====================================================





var mainApp = {
    name : "OmegaGame",
    status : "init",
    page : "",
    bench: 0,
}