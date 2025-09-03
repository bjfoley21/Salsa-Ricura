import AppLayout from "./AppLayout";

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
            <p>Beginner NY Salsa - 7:30-8:30pm</p>
            <p>Salsa Level 2 - 8:30-9:30pm</p>
            <br />
            <h3 className="title"> Prices</h3>
            <p>Drop-In: $20</p>
            <p>5-Week Session: $85</p>
            <p>10-Week Session: $130</p>
            <p>New Student 10-Week Session: $90</p>
            <br />  
          </div>
        </div>
      </div>
    </AppLayout>
  );
}