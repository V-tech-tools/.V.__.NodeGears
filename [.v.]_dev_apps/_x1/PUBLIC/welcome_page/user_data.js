var app = {
  // Config for it
  config: {
    dbg_time_updt : 250,
    back_type     : 'svg',
    dot_spacing   : 100,
    dot_size      : 5,
    dot_color     : 'orange',
    dot_hype_color: 'darkorange',
    dot_act_color : 'red',
    draw_grid     : true
  },
  // Some Data Space
  data : {
    all_fps : 0,
    fps     : 0,
    prev_fps: 0
  },  
  elems : {
    background : null
  },
  // Gathering User Device Info
  device : {
    data  : {
      cpuCores        : null,
      memory          : null,
      cookieEnabled   : null,
      supportTouch    : null,
      maxTouchPoints  : null,
      language        : null,
      online          : null,
      orientation     : null,
      screenWidth     : null, 
      screenHeight    : null, 
      availHeight     : null,
      availWidth      : null,
      colorDepth      : null

    },
    gatherInfo: function() {

      // Pre set data (that will probably change by the end of this method)
      this.data.mobile          = false;
      this.data.supportTouch    = false;

      // Getting data
      this.data.javaEnabled     = navigator.javaEnabled();
      this.data.platform        = navigator.platform;
      this.data.agent           = navigator.userAgent;
      this.data.appVer          = navigator.appVersion;
      this.data.cookieEnabled   = navigator.cookieEnabled ;
      this.data.cpuCores        = navigator.hardwareConcurrency ;
      this.data.memory          = navigator.deviceMemory ;
      this.data.language        = navigator.language ;
      this.data.maxTouchPoints  = navigator.maxTouchPoints ;
      this.data.online          = navigator.onLine ;
      this.data.orientation     = screen.orientation.type ;
      this.data.screenWidth     = screen.width ;
      this.data.screenHeight    = screen.height ;  
      this.data.availHeight     = screen.availHeight;
      this.data.availWidth      = screen.availWidth;
      this.data.winHeight       = window.innerHeight;
      this.data.winWidth        = window.innerWidth;
      this.data.colorDepth      = screen.colorDepth;

      if ( "ontouchstart" in document.documentElement ) { 
        this.data.supportTouch = true;
      };

      if (this.data.supportTouch || (this.data.maxTouchPoints > 0)){ 
        this.data.mobile = true
      };

      window.requestAnimationFrame(function(){
        app.device.data.rafSupport = true;
      });
    }
  },
  // Single Frame Function
  frame: function(timestamp) {
    
    if (app.data.start === undefined){
      app.data.start = timestamp;
      app.data.start_dbg_time_updt = timestamp;
    };
    
    const one_second = timestamp - app.data.start;
    if (one_second > 1000) { 
      app.data.start = timestamp;
      app.data.fps = app.data.all_fps - app.data.prev_fps;
      app.data.prev_fps = app.data.all_fps;
    }
     
    const dbg_print_time = timestamp - app.data.start_dbg_time_updt;
    if (dbg_print_time > app.config.dbg_time_updt) { 
      app.data.start_dbg_time_updt = timestamp;
      document.getElementById('all_data').innerHTML = JSON.stringify( app, true, 2);
    }
    
    app.data.all_fps++;
    
    window.requestAnimationFrame(app.frame);
  },
  // Set Grid
  setGrid: function(){
    this.data.grid = {
      nvl : Math.trunc(app.device.data.winHeight / 100),
      nhl : Math.trunc(app.device.data.winWidth / 100),
      vas : Math.trunc(((app.device.data.winHeight / 100) - Math.trunc(app.device.data.winHeight / 100)) / 2 * 100),
      has : Math.trunc(((app.device.data.winWidth / 100) - Math.trunc(app.device.data.winWidth / 100)) / 2 * 100),
      nvl_desc: "nvl >> Number of Vertical Lines",
      nhl_desc: "nhl >> Number of Horizontal Lines",
      vas_desc: "vas >> Vertical Alignment Space",
      has_desc: "has >> Horizontal Alignment Space",
    }
  },
  // Create-or-mostly call right background to show up
  createBackground: function(){
    if (this.config.back_type){
      console.log('app.createBackground() >> Creating Background Element.');
      switch(this.config.back_type) {
        case "svg":
          // code block
          console.log('Found_TYPE >> SVG >> Creating Background Element.');
          this.createSvgBackground();
          break;
        case "div":
          // code block
          console.log('Found_TYPE >> DIV >> Creating Background Element.');
          break;
        default:
          // code block
          console.warn('TYPE >> [UNKNOWN] >:trying_to_execute:> SVG >> Creating Background Element.');
      }
    } else {
      console.warn('MISSING >> [ config.back_type ] >:fallback-to:> SVG');
      this.config.back_type = 'svg';
      this.createBackground();
    }
  },
  // Create SVG Background
  createSvgBackground: function(){
    // Remove Elem if Exist already
    if (this.elems.background !== null){
      document.getElementById('main_svg_background').remove();
    };
    
    // New SVG Background
    var svgBack = document.createElement("SVG");   // Create a <button> element
    svgBack.setAttribute('id','main_svg_background');
    svgBack.setAttribute('width',this.device.data.winWidth);
    svgBack.setAttribute('height',this.device.data.winHeight);
    svgBack.setAttribute('viewBox',"0 0 "+this.device.data.winWidth+" "+this.device.data.winHeight);
    //svgBack.style.position = "fixed";
    svgBack.style.display = "flex";
    svgBack.style.top = "0";
    svgBack.style.left = "0";
    svgBack.innerHTML = `<svg viewBox="0 0 1000 1000" width="`+this.device.data.winWidth+`" height="`+this.device.data.winHeight+`" preserveAspectRatio="xMidYMid meet" x="0" y="0">
                            <path id="smiley" d="M500,100 A40,40,1,1,1,500,900 A40,40,1,1,1,500,100 M300,400 Q360,350,420,400 M580,400 Q640,350,700,400 M300,600 Q500,750,700,600 Q500,750,300,600" style='fill: rgba(50,10,10,0.5);stroke: rgba(0,0,0,0.5);stroke-width: 18px;stroke-linecap: round;stroke-linejoin: round;pointer-events: none;'></path></use>
                    </svg>`;
    document.body.appendChild(svgBack); 
    this.elems.background = document.getElementById('main_svg_background');
  },
  // INIT - Let it start << 
  init: function(){
    // Trigger device info gather
    this.device.gatherInfo();
    
    // Check if wanna draw grid
    if (this.config.draw_grid) {
      this.setGrid();
    };
    
    // Create Background
    this.createBackground();
    
    // Add rezize event to trigger redrawing/calculating of it.
    window.onresize = function(){
      if (app.config.draw_grid) {
        app.setGrid();
      };
      app.device.gatherInfo();
      app.createSvgBackground();
    };
    
    // Start Animation Function
    window.requestAnimationFrame(app.frame);
  } 
}
