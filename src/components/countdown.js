import React from 'react';
import '../styles/countdown.css';
import NumScroller from '../components/NumScroller';

function Countdown() {
  return (
    <section className="stats-section" aria-label="Arac Polywrap at a glance">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-12 col-md-4">
            <div className="stat-item">
              <NumScroller maxCount={100} />
              <p>Happy clients</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="stat-item">
              <NumScroller maxCount={12} />
              <p>Countries exported</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="stat-item">
              <NumScroller maxCount={287} />
              <p>Shipments done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
