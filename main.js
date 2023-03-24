var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://o.remove.bg/downloads/52db6181-ea2b-4e0d-a9ed-419d1edb092a/imgbin-grandparent-grandfather-grandpa-grandpa-art-background-man-wearing-vest-and-dress-shirt-H2brpK9cxN4NRenzWkt0JRnAu-removebg-preview.png",
"https://o.remove.bg/downloads/77c0308b-f930-4af8-9f92-74c392041818/cartoon-grandparent-clip-art-grandma-cliparts-removebg-preview.png",
"https://o.remove.bg/downloads/7901be75-4421-4373-8ece-150609488a7c/superdad-father-s-day-cartoon-child-fun-removebg-preview.png",
"https://o.remove.bg/downloads/9da91c08-e221-4862-8df3-895f119d2a26/b5126195f4c97e70e9f83d8c004128aa-removebg-preview.png",
"https://o.remove.bg/downloads/6f9ad20e-6b4b-4d3a-b813-1a1f51cdd2dd/imgbin-sister-hand-painted-cartoon-girl-with-curly-hair-DQ9rHjwBdcGvDjXL2DjvKYgKe-removebg-preview.png"];
var names = ["Fmaily Book","Late Sri Ram prakash pandey", "Mrs.Radha Pandey", "Mr.Vivek kumar pandey", "Mrs.Jyoti pandey", "Navya pandey"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
