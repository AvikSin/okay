var images = ["images.png","shiva.png", "namya.png" , "me.png", "pepe.png", "mom.png"]; var names = ["Fmaily Book","shiva Singh", "namya Singh", "avik Singh", "vikas chandra Singh", "Shilpi Singh"]; var i = 0; function update() { i++; var numbers_of_family_member_in_array = 5; if(i > numbers_of_family_member_in_array ) { i = 0; } var updatedImage = images[i]; var updatedName = names[i]; document.getElementById("family_member_image").src = updatedImage; document.getElementById("family_member_name").innerHTML = updatedName; }