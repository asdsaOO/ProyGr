import React from "react";

function CheckformComp(props) {
  return (
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value={props.value} id={props.id} name={props.name} checked={props.checked}/>
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    </div>
  )
}

export{CheckformComp}