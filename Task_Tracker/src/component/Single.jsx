import React from 'react'
// import Single from 'Single'

function Single({work,dueDate}) {
  return (
    <>
        <div class="row">

<div className="col col-lg-2">
   <p>{work}</p>
 </div>
 <div className="col-md-auto">
   <p>{dueDate}</p>
 </div>
 <div className="col col-lg-2">
 <button type="button" class="btn btn-success">Success</button>
 </div>
</div>
    </>
  )
}

export default Single