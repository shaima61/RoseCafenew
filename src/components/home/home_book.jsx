import React from 'react';

function Book() {
  return (
  
    <section className="book">
      <div className="section__container book__container">
        <form action="/">
          <h4>Book a Table</h4>
          <div className="input__row">
            <div className="input__group">
              <label for="firstName">FIRST NAME</label>
              <input type="text" />
            </div>
            <div className="input__group">
              <label for="lastName">LAST NAME</label>
              <input type="text" />
            </div>
          </div>
          <div className="input__row">
            <div className="input__group">
              <label for="date">DATE</label>
              <input type="date" />
            </div>
            <div className="input__group">
              <label for="person">PERSON</label>
              <input type="text" />
            </div>
          </div>
          <div className="input__row">
            <button className="btn" type="submit">BOOK A TABLE</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Book;