import React, {useState} from "react";
import cover from '../Images/1.png';
import img1 from '../Images/3.png';
import img2 from '../Images/4.png';
import img3 from '../Images/5.png';
import img4 from '../Images/6.png';
import frame from '../Images/frame.png';
import img5 from '../Images/7.png';

import img6 from '../Images/l1.png';
import img7 from '../Images/l2.png';
import img8 from '../Images/l3.png';
import img9 from '../Images/starts.png';

import arrow from '../Images/arrow.png';

export default function Home(){

    const divStyle = {
        backgroundColor: '#1b1f24',
        minHeight: '450vh',
      };

    return(
        <div style={divStyle} >
        <div className="container">
            <div className="a3">
            <h4 style={{ color: 'white' }}>POWERFUL TOOLS</h4>
            <h1 style={{ color: 'white'}}>For Building Your Brand's<br></br>Online Presence</h1>
            <h6 style={{ color: '#b7b7b7' }}>Supercharge your social media marketing efforts with our<br></br>cutting-edge platform. Reach, engage, and grow your<br></br>audience like never before.</h6>
            <br></br>
            <button type="button" class="btn btn-success">Explore Features</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success"  style={{ color: 'white' }}>Watch Demo</button>
            <div className="a4">
            <img src={cover} height="400px" width="600px"/>
            </div>
            </div>
            <div className="a6">
                <h4 style={{ color: 'white' }}>Simplified Social Success</h4>
                <h1 style={{ color: 'white' }}>Four Steps to Amplify Your Social Media Presence</h1>
                <h6 style={{ color: '#b7b7b7' }}>Our platform makes social media success simple and achievable. Follow these three<br></br> steps: plan your strategy, execute with our powerful tools, and analyze the results.</h6>
            </div>

            <div className="a8">
                <img src={img1} height="200px" width="200px"/>
                <img src={frame} height="200px" width="200px" id="x1"/>
                <h4 style={{ color: 'white' }}>Plan Your Strategy</h4>
                <h6 style={{ color: '#b7b7b7' }}>Define your social media goals,<br></br> target audience, and content<br></br> strategy. Identify key platforms and <br></br>develop a comprehensive plan to <br></br>achieve your marketing objectives.</h6>
            </div>
            <div className="a9">
                <img src={img2} height="200px" width="200px"/>
                <img src={frame} height="200px" width="200px" id="x2"/>
                <h4 style={{ color: 'white' }}>Execute with Ease</h4>
                <h6 style={{ color: '#b7b7b7' }}>Utilize our intuitive platform to <br></br>streamline your social media <br></br>execution. Schedule and publish <br></br>content, engage with your <br></br>audience, and manage your <br></br>campaigns effortlessly.</h6>
            </div>
            <div className="a10">
                <img src={img3} height="200px" width="200px"/>
                <img src={frame} height="200px" width="200px" id="x3"/>
                <h4 style={{ color: 'white' }}>Measure and Analyze</h4>
                <h6 style={{ color: '#b7b7b7' }}> Gain valuable insights into your<br></br> social media performance. Monitor<br></br> metrics, track engagement, and<br></br> analyze data to refine your <br></br>strategy and optimize your results.</h6>
            </div>
            <div className="a11">
                <img src={img4} height="200px" width="200px"/>
                <img src={frame} height="200px" width="200px" id="x4"/>
                <h4 style={{ color: 'white' }}>Adapt and Grow</h4>
                <h6 style={{ color: '#b7b7b7' }}>Stay agile in the ever-evolving <br></br>social media landscape.<br></br> Continuously adapt your approach<br></br> based on data-driven insights,<br></br> trends, and audience feedback to <br></br>foster growth and drive success.</h6>
            </div>

            <div className="a7">
                <h4 style={{ color: 'white' }}>Empowering Your Digital Presence</h4>
                <h1 style={{ color: 'white' }}>Unlocking Success in the Social Sphere</h1>
                <h6 style={{ color: '#b7b7b7' }}>At [Your Company Name], we are dedicated to empowering businesses to thrive in the digital world.With<br></br> our innovative social media marketing platform, we provide the tools and expertise to amplify your brand's<br></br> online presence. Join us on this transformative journey and unlock your true potential in the social sphere.</h6>
            </div>

            <div className="a12">
                <img src={img5} height="700px" width="530px"/>
            </div>
            <div className="a13">
                <h4 style={{ color: '#b7b7b7' }}>About Us</h4>
                <h3 style={{ color: 'white' }}>Transforming Businesses with<br></br> Technology</h3>
                <h6 style={{ color: '#b7b7b7' }}>Revolutionizing businesses with cutting-edge technology,<br></br> empowering them to thrive in the digital age</h6>
            </div>
           
           <div className="a14">
                <img src={img6} height="80px" width="80px"/>
            </div>
            <div className="r1">
                <h4 style={{ color: 'white' }}>Cutting-Edge Technology</h4>
                <h6 style={{ color: '#b7b7b7' }}>Our platform leverages cutting-edge technology to provide you with the<br></br> most advanced and intuitive tools for social media management</h6>
            </div>

            <div className="a15">
                <img src={img7} height="80px" width="80px"/>
            </div>
            <div className="r2">
                <h4 style={{ color: 'white' }}>Exceptional User Experience</h4>
                <h6 style={{ color: '#b7b7b7' }}>We prioritize user experience at every step. Our platform is built with a <br></br>user-friendly interface and intuitive design, ensuring that even beginners <br></br>can navigate and utilize our tools effortlessly.</h6>
            </div>

            <div className="a16">
                <img src={img8} height="80px" width="80px"/>
            </div>
            <div className="r3">
                <h4 style={{ color: 'white' }}>Dedicated Support</h4>
                <h6 style={{ color: '#b7b7b7' }}>Your success is our priority. Our dedicated support team is always ready <br></br>to assist you, ensuring that you receive timely and reliable support <br></br>whenever you need it</h6>
            </div>
            <div className="a17">
                <h4 style={{ color: '#b7b7b7' }}>Success Stories: Hear from Our Clients</h4>
                <h1 style={{ color: 'white' }}>Transforming Social Media Presence Together</h1>
                <h6 style={{ color: '#b7b7b7' }}>At our platform, we are committed to empowering businesses with the tools and <br></br>expertise they need to thrive in the ever-changing social media landscape</h6>
            </div>

            <div className="a18">
                <h3 style={{ color: 'white' }}>Jane Cooper</h3>
                <h5 style={{ color: 'white' }}>Freelancer</h5>
                <img src={img9} height="30px" width="130px"/>
                <h6 style={{ color: '#b7b7b7' }}>Lorem ipsum dolor sit amet consectetur. <br></br>Venenatis vivamus sed varius ut massa <br></br>tincidunt eget ultricies amet. Sed sed eu<br></br> venenatis habitant vitae. Arcu eu <br></br>consectetur purus dolor in. A enim est<br></br> lectus vel eget.</h6>
            </div>
            <div className="a19">
                <h3 style={{ color: 'white' }}>Esther Howard</h3>
                <h5 style={{ color: 'white' }}>Freelancer</h5>
                <img src={img9} height="30px" width="130px"/>
                <h6 style={{ color: '#b7b7b7' }}>Lorem ipsum dolor sit amet consectetur. <br></br>Venenatis vivamus sed varius ut massa <br></br>tincidunt eget ultricies amet. Sed sed eu<br></br> venenatis habitant vitae. Arcu eu <br></br>consectetur purus dolor in. A enim est<br></br> lectus vel eget.</h6>
            </div>
            <div className="a20">
                <h3 style={{ color: 'white' }}>Robert Fox</h3>
                <h5 style={{ color: 'white' }}>Freelancer</h5>
                <img src={img9} height="30px" width="130px"/>
                <h6 style={{ color: '#b7b7b7' }}>Lorem ipsum dolor sit amet consectetur. <br></br>Venenatis vivamus sed varius ut massa <br></br>tincidunt eget ultricies amet. Sed sed eu<br></br> venenatis habitant vitae. Arcu eu <br></br>consectetur purus dolor in. A enim est<br></br> lectus vel eget.</h6>
            </div>
            <img src={arrow} id="arrow"/>

            <div className="a21">
                <h5 style={{ color: '#b7b7b7' }}>Stay Connected with Our Newsletter</h5>
                <h3 style={{ color: 'white' }}>Unlock Exclusive Insights and Strategies for Social Media Success</h3>
                <form class="form-inline">
                <div class="form-group mb-2">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Type Email"/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
    )

}