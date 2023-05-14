window.onload = function() {
    function $(id) {
        return typeof id === "string" ? document.getElementById(id) : null;
    };
    let currebtSec1 = 1 , minSec1 = 1 , maxSec1 = 4;
    $('sec1pre').onclick = function() {
        if(currebtSec1 == minSec1){
            currebtSec1 = maxSec1;
        }
        else{
            currebtSec1--;
        };
        if(currebtSec1 == 1){
            $('cai_yi_clinic').style.background = `linear-gradient(0deg, rgba(219, 203, 191, 0.75) 0%, rgba(219, 203, 191, 0) 100%), url('imges/caiyi01.jpg') no-repeat center`;
            $('cai_yi_clinic').style.backgroundSize = `cover`;
        }
        else{
            $('cai_yi_clinic').style.backgroundImage = `linear-gradient(0deg, rgba(219, 203, 191, 0.75) 0%, rgba(219, 203, 191, 0) 100%), url('imges/caiyi0${currebtSec1}.jpg')`;
        }
    }
    $('sec1nex').onclick = function() {
        if(currebtSec1 == maxSec1){
            currebtSec1 = minSec1;
        }
        else{
            currebtSec1++;
        }
        if(currebtSec1 == 1){
            $('cai_yi_clinic').style.background = `linear-gradient(0deg, rgba(219, 203, 191, 0.75) 0%, rgba(219, 203, 191, 0) 100%), url('imges/caiyi01.jpg') no-repeat center`;
            $('cai_yi_clinic').style.backgroundSize = `cover`;
        }
        else{
            $('cai_yi_clinic').style.backgroundImage = `linear-gradient(0deg, rgba(219, 203, 191, 0.75) 0%, rgba(219, 203, 191, 0) 100%), url('imges/caiyi0${currebtSec1}.jpg')`;
        }
    }
}
