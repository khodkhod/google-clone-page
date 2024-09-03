import goolgeLogo from "./assets/googlelogo_clr_148x48px.svg"
import googleMic from "./assets/google mic.jpg"
import googleSearch from "./assets/images.png"
import googleCam from "./assets/download.png"
import googleLab from "./assets/app.png"
import googleFile from "./assets/lab.png"
import './App.css'


const App = () => {
  return (
    <>
      <div className="first">
        <ul className="list">
          <li>Gmail</li>
          <li>Images</li>
          <li><img className="file" src={googleFile} alt="" /></li>
          <li><img className="lab" src={googleLab} alt="" /></li>
          <li className="hi"><p className="K">K</p></li>

          {/* <a href=""></a>
          <a href=""></a> */}
        </ul>
        <ul className="list-two">
          <div className="one-one">
          <li>Gmail</li>
          <li>Images</li>
          </div>
          <div className="two-two">
          <li><img className="file" src={googleFile} alt="" /></li>
          <li><img className="lab" src={googleLab} alt="" /></li>
          <li className="hi"><p className="K">K</p></li>
          </div>
        </ul>
        <div className="middle">
          <img className="photo" src={goolgeLogo} alt="google logo" />
          <div className="go-inp">
            <img className="mic" src={googleMic} alt="google mic" />
            <input className="the-inp" type="text" name="" id="" />
            <img className="sear" src={googleSearch} alt="google mic" />
            <img className="cam" src={googleCam} alt="google mic" />
          </div>
          <div className="goog-inp">
            <img className="mics" src={googleMic} alt="google mic" />
            <input className="the-inps" type="text" name="" id="" />
            <img className="sears" src={googleSearch} alt="google mic" />
            <img className="cams" src={googleCam} alt="google mic" />
          </div>

        </div>

        <div className="overall">
          <div className="one">Google Search</div>
          <div className="two">I'm Feeling Lucky</div>
        </div>
        <div className="offered">Google offered in: <a href="">Hausa</a> <a href="">Igbo</a> <a href="">Èdè</a> <a href="">Yorùbá</a> <a href="">Nigerian Pidgin</a></div>
      </div>
      <div className="the-footer">
      <div className="sub-footer">Nigeria</div>
      <div className="footer">
        <div>
          <ul className="fir">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search works</li>
          </ul>
        </div>
        <div>
          <p className="cl">Our third decade of climate action: join us</p>
        </div>
        <div className="thir">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </div>
      </div>
      </div>
      <div className="the-footers">
      <div className="sub-footers">Nigeria</div>
      <div className="footers">
        <div>
          <ul className="firs">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search works</li>
          </ul>
        </div>
        <div>
          <p className="cls">Our third decade of climate action: join us</p>
        </div>
        <div className="thirs">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </div>
      </div>
      </div>
    </>
  )
}

export default App