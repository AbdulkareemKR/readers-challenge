import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MdOutlineMenuBook } from "react-icons/md";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.container} >
      <Fade
        durtion={1200}
        cascade
        damping={0.02}
        triggerOnce // to present each element on itself while moving down
        direction="up"
      >
<form 
  method='POST' 
  name='contactform' 
  className='contactForm'>

  <input 
    type='hidden'
    name='form-name'
    value='contactForm' />

  <input 
    type='text' 
    name='name' 
    placeholder='Enter your name' />

  <input 
    type='email' 
    name='email' 
    placeholder='Enter your email' />

  <textarea 
    name='message' 
    placeholder='Messaage'></textarea>

  <button type='submit'>Submit</button>
</form>
      </Fade>
    </div>
  );
}

export default Programs;
