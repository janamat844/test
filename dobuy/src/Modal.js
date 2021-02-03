import React from 'react'
import Input from './Input'
function Modal() {
    return (
        <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
            <div className="login">
            <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <Input title="Email" type="email"/> 
                <Input title="Password" type="password"/>
                <br/>
                <button type="submit" className="login_signin">Sign in</button>
                <hr/>
                <p>I accept term and conditions</p>
            </form>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default Modal
