const userInfo = JSON.parse(localStorage.getItem("user"));
const usernameAB = userInfo.username;

const ABR1 = usernameAB.split(" ")[0].slice(0, 1);
const ABR2 = usernameAB.split(" ")[1]?.slice(0, 1);

document.getElementById("navbar").innerHTML = `  
<nav>
<div class="top-nav">
  <div class="left-nav">
    <a href="../index.html" class="logo">
      <h2>MY_<span>BRAND</span></h2>
    </a>
    <div class="links">
      <a href="./index.html">Home</a>
      <a href="./ContactMessage.html">Message</a>
      <a href="./aritcles.html">Articles</a>
    </div>
  </div>
  <div class="top-right">
 
  <div id="popup" class="popup"></div>
  <div id="profile" class="profile" style="display:flex; flex-direction: row;align-items:center;text-align:center;justify-content: center">
    <span style="color:white;font-size:24px;text-align:center;text-transform: uppercase">${ABR1}${
  ABR2 ? ABR2 : ""
}</span>
  </div>
  <div class="setting-modal">
    <a href="./setting.html">
      <div>
    
          
      </div>
      <span>

        Setting
      </span>
    </a>
    <a href="./users.html">
      <div>
    
          
      </div>
      <span>
       Users
      </span>
    </a>
    <div onclick="LoggOut()" style="display: flex;flex-direction: row;cursor: pointer; align-items: center;">
      <div>
     
          
     
      </div>
      <span>

        Logout
      </span>
    </div>
  </div>
</div>
</div>
<div class="bottom_nav">
  <span class="hello">Welcome Again</span>
  <span class="date"></span>
</div>
</nav>`;
