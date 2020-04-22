{/* ---------------------login-error-Modal window--------------------------------------   */}
<div className="modal" id="myModal" role="dialog">
<div className="modal-dialog modal-dailog-centered">
    <div className="modal-content rounded-pill col-8">
        <div className="modal-body d-flex flex-row justify-content-between align-items-center ml-n4" style={{height:'10vh'}}>
                <img src={require('../../images/close.svg')} class="cross-img"/>
                <div class="d-flex justify-content-center align-items-start flex-column">
                <small class="mb-0">Sorry.</small>
                <small class="mb-0">Bad credentials.</small>
                </div>
                {/* <div type="button"  style={{width:'7vw'}} data-dismiss="modal" onClick={this.handleModal} >Retry</div> */}
                <small type="button" class="log-error-retry p-3 mr-n3" data-dismiss="modal" onClick={this.handleModal}>Retry</small>
        </div>
    </div>
</div>
</div>
{/* ---------------------login-error-Modal window--------------------------------------*/}


$("#myModal").modal({backdrop:"static",show:true});