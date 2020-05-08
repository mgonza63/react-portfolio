import React from 'react'

import './style.css'

const Contact = () => {
    return (
        <div className="container contact">
            
        <div className="row justify-content-md-center">
            <div className="col">
                <h2 className="mt-5">Contact me</h2>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <input  class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
    )
}

export default Contact;