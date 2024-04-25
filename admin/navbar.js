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
    <div onclick="openNotifi()" class="notification">
      <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M9.28426 23.6372C9.95081 23.4962 14.0124 23.4962 14.6789 23.6372C15.2488 23.7688 15.8649 24.0763 15.8649 24.7478C15.8318 25.387 15.4568 25.9537 14.9387 26.3136C14.2668 26.8373 13.4784 27.169 12.6541 27.2885C12.1983 27.3476 11.7504 27.3489 11.3104 27.2885C10.4848 27.169 9.69638 26.8373 9.02586 26.3122C8.5064 25.9537 8.13138 25.387 8.09825 24.7478C8.09825 24.0763 8.71445 23.7688 9.28426 23.6372ZM12.0603 0.666656C14.8338 0.666656 17.667 1.98268 19.35 4.16621C20.4419 5.57221 20.9428 6.97686 20.9428 9.16039V9.72843C20.9428 11.403 21.3854 12.39 22.3594 13.5274C23.0975 14.3654 23.3334 15.4411 23.3334 16.608C23.3334 17.7736 22.9504 18.8802 22.1831 19.7786C21.1787 20.8556 19.7621 21.5431 18.3163 21.6626C16.2213 21.8412 14.1249 21.9916 12.0007 21.9916C9.87514 21.9916 7.78008 21.9017 5.68502 21.6626C4.23796 21.5431 2.82138 20.8556 1.81824 19.7786C1.05098 18.8802 0.666687 17.7736 0.666687 16.608C0.666687 15.4411 0.903889 14.3654 1.64067 13.5274C2.64513 12.39 3.05858 11.403 3.05858 9.72843V9.16039C3.05858 6.91778 3.61779 5.45135 4.76935 4.01581C6.48144 1.92225 9.22582 0.666656 11.9411 0.666656H12.0603Z"
      fill="black"
      />
    </svg>
    <div class="noti"></div>
    <div class="notification-container">
      <h1>notification</h1>
      <div class="notifi">
        <div class="notifi-contain">
          <h2>N.PM</h2>
          <span>npm like your blog</span>
        </div>
        <div class="notifi-contain">
          <h2>Ntwali</h2>
          <span>Ntwali message you </span>
        </div>
      </div>
    </div>
  </div>
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
