import BookCard from './rform';
import ServicePage from './Services';
// import Appnav from './navbar';
import Nav from '../src/components/Navbar';

export default function HomeApp() {

  return (<>

    <div className='My_app'>
      <Nav/>
      <div className='Slogans'>
        <BookCard/>
        <h1 className='h1-styleing'>We are proffesional auto wash and detailing, people- friendly digital experiences.</h1>
        <p className='sec1-para'>GOWASHE is the leader in on-demand washing and detailing services. GOWASHE , your car wash app, is the most convenient and cost-effective way to wash your car. Instead of having to drive to a car wash and then wait in line, you can simply download the app, schedule a time, and the mobile car wash will come to you.</p></div>

        <div className='webV4' style={{ width: "100%", height: "600px" }}></div>
        <div className='Articles1'>
          <p className='articles_p' >With <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b>
            , you can
            schedule a wash now
            and get a professional to your door in minutes. Rest assured your washer has been thoroughly
            vetted, background checked, insured, and backed by our quality control assurance team. What
            makes <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b> really stand out above the rest is our custom pricing based on your comfort - <p className="design2"> Doorstep washing</p> , <p className="design2">Outlet washing</p> , <p className="design2">Hybrid plans</p>. With a wide variety of professionals serving different areas, we proudly stand by our motto, "Car Wash in Minutes!"


          </p>
          <p className="articles_p" style={{ marginTop: "20px" }}>Trusted by thousands of monthly users, we make it easier than ever to get your car washed at home or at work,so you can spend your time doing what matters.The best mobile car wash app, <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b> true auto wash detailing app.
          </p>

        </div >
        <div style={{ textAlign: "center" }}>
          <p className='design' style={{ fontSize: "32px", marginTop: "40px", marginBottom: "40px", fontFamily: "100", fontStyle: "italic" }}>Our Approach</p>
        </div>
        <div className='service_section'>
          <p className='articles_p'><p style={{ display: "inline-block", color: "#979797" }} className="design2">Doorstep Car Wash -</p>  Book your car wash from the comfort of your home and get our washing
            professional at your doorstep within minutes. We also provide monthly and hassle free
            subscriptions for your car wash.We provide complete car wash and detailing service for all
            models of high-end vehicles including sedans, MUVs, 5-seater SUVs, and 7-seater SUVs.<br /><br />
            <p style={{ display: "inline-block", color: "#979797" }}  className="design2">Outlet Car Wash -</p> Get our outlet car wash appointment booked from our website and
            -	app or mobile
            to avoid queue waiting time and save your precious time for your family and friends.<br /><br />
            <p style={{ display: "inline-block", color: "#979797" }}  className="design2">Hybrid Car Wash Plan -</p> With our hybrid car wash plan you get a monthly doorstep
            car wash along
            with outlet car wash as a perk at the most competitive market price without queue waiting
            time.<br /><br />

          </p>




      </div>
      <ServicePage/>
     
   </div>
 
   </>

  );


}