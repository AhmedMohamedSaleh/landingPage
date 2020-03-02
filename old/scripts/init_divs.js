window.addEventListener('load', yourFunction, false);
// ..... or 
window.addEventListener('DOMContentLoaded', false);

function yourFunction () {
    
copy_div('.stars_block' , '.stars_block_redunant');
copy_div('.general_hr_style_underline' , '.general_hr_style_underline_redunant');
copy_div('.our_reviews_grid_items_stars' , '.our_reviews_grid_items_stars_redunant');

function copy_div(original_div_name,coped_div_name){

    // Get the element
    var elem = document.querySelector(original_div_name);

    // Create a copy of it
    var clone = elem.cloneNode(true);

    // Update the ID and add a class
    clone.id = coped_div_name;

    var elements = document.querySelectorAll(coped_div_name);

    for(var i=0;i<elements.length;i++)
    {        
            // Create a copy of it
            var clone2 = clone.cloneNode(true);
            elements[i].append(clone2);
    }
}

}
