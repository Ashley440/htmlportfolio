function unstyle(){
    const template = document.getElementById("columns");
    template.style.transition="0.5s";
    template.style.gridTemplateColumns = "0% 100%";
}
function style(){
    const template = document.getElementById("columns");
    template.style.gridTemplateColumns = "80% 20%";
    template.style.transition="0.5s";
}



function home(){
    const left = document.getElementById("display");
    left.innerHTML="";
    const bodyy = document.getElementById("dybo");
    bodyy.style.backgroundImage="unset";
    bodyy.style.backgroundColor="black";
    //left.style.visibility="hidden";
    unstyle();
}

function about(){
    style();
    const left = document.getElementById("display");
    const bodyy = document.getElementById("dybo");
    bodyy.style.backgroundImage="url('res/tuxpi.com.1635941685.jpg')";
    left.style.visibility="visible";
    //left.style.backgroundImage="url('res/tuxpi.com.1635941685.jpg')";
    left.style.backgroundRepeat="no-repeat";
    left.innerHTML=`<h1 style="color:goldenrod;text-align:center;">About Me</h1>
    I am a graduate of the University of Western Cape (UWC) with a bachelor's degree in Computer Science (BSc). My interests include but are not limited to the following:
    <ul>
        <li>Software engineering</li>
        <li>software development</li>
        <li>machine learning</li>
        <li>artificial intelligence</li>
    </ul>
    I have graduate experience in software engineering processes. I can regard myself as a junior full-stack developer as I know the backend to the frontend of software development.
    <p>
        Besides computers I have other activities that I enjoy on my time:
        <ul>
            <li>I play football</li>
            <li>I play chess game</li>
            <li>I fix electronics and smartphones</li>
        </ul>
    </p>
    `;
}

function skills(){
    style();
    const left = document.getElementById("display");
    left.style.padding="0.5%";
    const bodyy = document.getElementById("dybo");
    bodyy.style.backgroundImage="url('res/skills.jpg')";
    left.style.visibility="visible";
    //left.style.backgroundImage="url('res/skills.jpg')";
    left.style.backgroundRepeat="no-repeat";
    left.innerHTML=`<h1 style="color:goldenrod;text-align:center">My Skills</h1>
    <div class="columnsFour">
    <div class="columnFour" style="background-color: black; ">
        <h1 style="color:blueviolet">Software Development</h1>
        <p>
            I embrace taking part in full software development lifecycles:
            <ul>
                <li>Database design *****</li>
                <li>System implementation ****</li>
                <li>User experience design *****</li>
            </ul>
        </p>
    </div>
    <div class="columnFour" style="background-color: black; ">
        <h1 style="color:coral">Machine Learning</h1>
        <p>
            I experienced the power that lies in the field of machine learning, deep learning and artificial intelligence:
            <ul>
                <li>Model design and training ****</li>
                <li>Model testing and statistical analysis ****</li>
                <li>Big data visualization ****</li>
            </ul>

        </p>
    </div>
    <div class="columnFour" style="background-color:black; ">
        <h1 style="color:forestgreen">Programming Languages</h1>
        <p>I am constantly learning while using the following languages:</p>
        <div class="languagesP">
            <div class="langP" style="background-color:black; border-radius: 2em;">
                <ul>
                    <li>Java *****</li>
                    <li>Python ****</li>
                    <li>C++ ***</li>
                    <li>Dart ***</li>
                    <li>MatLab *****</li>
                </ul>
            </div>
            <div class="langP" style="background-color:black; border-radius: 2em;">
                <ul>
                    <li>JavaScript ****</li>
                    <li>HTML *****</li>
                    <li>CSS *****</li>
                    <li>TSQL ****</li>
                    <li>MySQL *****</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="columnFour" style="background-color:black;">
        <h1>Frameworks and Tools</h1>
        <p>I used more frameworks than I could remeber, here is a shortlist of the ones I used the most.</p>
        <div class="languagesP">
            <div class="langP" style="background-color:black; border-radius: 2em;">
                <ul>
                    <li>ASP.NET ****</li>
                    <li>React Native **</li>
                    <li>Bootstrap ***</li>
                </ul>
            </div>
            <div class="langP" style="background-color: black; border-radius: 2em;">
                <ul>
                    <li>Flutter ****</li>
                    <li>Apache MXNet ***</li>
                    <li>figma *****</li>
                    <li>LaTeX *****</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;
}

function project(){
    style();
    const left = document.getElementById("display");
    left.style.padding="0%";
    const bodyy = document.getElementById("dybo");
    bodyy.style.backgroundImage="url('res/proj.jpg')";
    left.style.visibility="visible";
    //left.style.backgroundImage="url('res/proj.jpg')";
    left.style.backgroundRepeat="no-repeat";
    left.innerHTML=`<h1 style="color:goldenrod;text-align:center;">Rescent Projects</h1>
    <h5>This is a website that I developed in w3spaces but I moved it to heroku.</h5>
    <iframe src="https://asmylstrate.herokuapp.com/" height="400" width="90%" title="My Small Company"></iframe>
    <h5>I was inspired to extend the javascript project that was assigned to me.</h5>
    <iframe src="https://asmyl.herokuapp.com/" height="400" width="90%" title="Order Quote"></iframe>
    <h5>I made a portfolio website using ASP.NET and it was not challenging at all so I restarted a new one with basic html, css and javascript.</h5>
    <iframe src="https://initialportfolio.herokuapp.com/" height="400" width="90%" title="My Initial Portfolio"></iframe>
    <h5>This is is a search feature that uses the javascript library React.js. I love it because it is rare to find a dynamic search.</h5>
    <iframe src="https://dyn-search.herokuapp.com/" height="400" width="90%" title="Dynamic Search Feature"></iframe>
    `;
}

function resume(){
    style();
    const left = document.getElementById("display");
    left.style.padding="0%";
    const bodyy = document.getElementById("dybo");
    bodyy.style.backgroundImage="url('res/proj.jpg')";
    left.style.visibility="visible";
    //left.style.backgroundImage="url('res/proj.jpg')";
    left.style.backgroundRepeat="no-repeat";
    left.innerHTML=`<h1 style="color:goldenrod;text-align:center">Updated Resume</h1>
    <object data="res/resume.pdf" type="application/pdf" height="30%" width="90%" title="Dynamic Search Feature"></object>
    `
}


