const productImage = document.getElementById('product_image')! as HTMLInputElement


productImage.onchange= async function(ev:Event){
 try {
     let target = ev.target! as HTMLInputElement
    let files = target.files

    if(files){
    
    const formData= new FormData();
    //  console.log(files[0]);

      formData.append("file", files[0]);
      formData.append("upload_preset", "Ecommerce");
      formData.append("cloud_name", "joendambuki16");

   let x= await fetch("https://api.cloudinary.com/v1_1/joendambuki16/image/upload",
    {
        method:'POST',
        body: formData
    
    })
    let data = await x.json()
    console.log(data.url);
    let someone={
      Name:data.url as string,
      Email:"gichukicynthia1@gmail.com",
      Destination:"China",
      TravelDate:"2023/03/03"
    }
    await fetch('http://localhost:4000/flights',{
      headers:{
        'Content-Type': 'application/json'
      },
      method:'POST',
      body:JSON.stringify(someone)
      }
    )
  
}
 } catch (error) {
  console.log(error);
  
 }

}