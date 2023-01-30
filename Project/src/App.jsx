import './App.css'

function App() {
  return (
    <div class="body">
      <header>
        
        <div class="title">
          <h1 class="title_main">Test Blog</h1>
        </div>

        <div class="nav_links">  
          <nav>
            <ul class="#">
              <li class="home"><a href="#">Home</a></li>
              <li class="about"><a href="#">About</a></li>
              <li class="contact"><a href="#">Contact</a></li>
            </ul>
          <toggle ></toggle>
          <a href="#"><button class="#">Contact</button></a>
          </nav>
        </div>
      
      </header>
      
      <section class="main">

      </section>
    
      <footer>
        <div class="footer_div">
          <center>
            <div class="footer_links">
              <nav>
                <ul class="#">
                  <li class="about_footer"><a href="#" class="#">About</a></li>
                  <li class="contact"><a href="#">Contact</a></li>
                </ul>  
              </nav>
            </div>
          </center>
          <div class="desc_info">
            <p>
              Made in Scotland @ 2023 VsCode
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
