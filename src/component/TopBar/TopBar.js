import React from 'react'
import './TopBar.css'

class TopBar extends React.Component{
    render(){
        return(
        <div class="navbar shadow navbar-static-top">
            <form class="d-none d-inline-block mr-auto w-25 ml-5">
            <div class="input-group d-flex">
              <input type="text" class="form-control bg-light border-0" placeholder="Search for..." />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <div class="nav-item dropdown no-arrow">
            <div class="nav-link d-flex align-items-center dropdown-toggle mr-3" id="dropdownMenuButton" data-toggle="dropdown">
                <span class="name-profile">Hafis</span>
                <img class="img-profile rounded-circle ml-2" src="https://p16.muscdn.com/img/musically-maliva-obj/1637841601569797~c5_1080x1080.jpeg"></img>
            </div>
            <div class="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" >LogIn</a>
            </div>
          </div>    
        </div>
        )
    }
}
export default TopBar