import React from 'react';
import './ContactsContent.scss';

const ContactsContent = () => (
  <div className="ContactsContent">
    <ul>
        <li>
            <p className='contact-el-title'>Contact us in USA</p>
            <p>44 Tehama St San Francisco</p>
            <p>+1 (415) 670-90-70</p>
        </li>
        <li>
            <p className='contact-el-title'>Contact us in Belarus</p>
            <p>5-303 Nemiga St. Minsk</p>
            <p>+375 (29) 311-52-49</p>
        </li>
        <li>
            <p className='contact-el-title'>Contact us in Poland</p>
            <p>Warszawa Grzybowska 62</p>
            <p>+48 xx xxx xx xx</p>
        </li>
        <li>
            <p className='contact-el-title'>Contact us in Ukraine</p>
            <p>Kyiv Kruglouniversytetska St. 7</p>
            <p>+380 xx xxx xx xx</p>
        </li>
    </ul>
  </div>
);

export default ContactsContent;
