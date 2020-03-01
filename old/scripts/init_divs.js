window.addEventListener('load', yourFunction, false);
// ..... or 
window.addEventListener('DOMContentLoaded', false);

function yourFunction () {
    
// Get the element
var elem = document.querySelector('.stars_block');

// Create a copy of it
var clone = elem.cloneNode(true);

// Update the ID and add a class
clone.id = 'stars_block_redunant';

var elements = document.querySelectorAll('.stars_block_redunant');

for(var i=0;i<elements.length;i++)
{        
        // Create a copy of it
        var clone2 = clone.cloneNode(true);
        elements[i].append(clone2);
}


}
