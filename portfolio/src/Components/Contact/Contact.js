import React from 'react';

const Contact = () => {
    return ( 
        <section className="project">
                <div className="title">
                    {/* <div className="col-xl-"> */}
                        <h2 id="contact">Say Hello!</h2>
                    {/* </div> */}
                    
                </div>
                <br/><br/>
                <form className="container" action="/form/submit" method="post">
                    <div className="row">
                        <div className="col-sm">
                        <br/><br/>
                            <label for="name">Name: </label>
                            <input name="name" type="text" id="name" placeholder="Enter your name"/>                  
                            <br/><br/>
                            <label for="company">Company: </label>
                            <input type="text" name="company" id="company" placeholder="Enter your company"/>
                            <br/><br/>
                            <label for="phone">Phone Number: </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone #"/>
                            <br/><br/>
                            <label for="email">Email: </label>
                            <input type="text" name="email" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="col-sm">
                            <label for="message">*What would you like to say?</label>
                            <br/>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here"></textarea>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="title">
                        <input type="submit"/>
                    </div>
                </form>
            </section>    
     );
}
 
export default Contact;