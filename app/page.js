import AppLayout from "./AppLayout";
/////////////////////////////////////////m//m/////////////////////////////////////
export default function Page() {
  return (
    <AppLayout>
      <div className="success-wrapper">
        <div className="schedule-head">
          <h2 className="title centered-title">CLASS SCHEDULE</h2>
        </div>
        <div className="schedule">
          <div>
            <h2 className="title">Monday</h2>
            <a href="https://www.dancecomplex.org/event/salsa-2-2/2025-09-08/">
            <p>Beginner NY Salsa - 7:30-8:30pm</p>
            </a>
            <a href="https://www.dancecomplex.org/event/salsa-2-2/2025-09-08/">
            <p>Salsa Level 2 - 8:30-9:30pm</p>
            </a>
            <br />
            <h3 className="title"> Prices</h3>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>Drop-In: $20</p> 
            </a>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>5-Week Session: $85</p>
            </a>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>10-Week Session: $130</p>
            </a>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>New Student 10-Week Session: $90</p>
            </a>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>1-hr private (one students): $60</p>
            </a>
            <a href='https://www.mindbodyonline.com/explore/locations/salsa-ricura'>
            <p>1-hr private (two students): $80</p>
            </a>
            <br />  
          </div>
        </div>
      </div>
    </AppLayout>
  );
}