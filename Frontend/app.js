"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const productImage = document.getElementById('product_image');
productImage.onchange = function (ev) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let target = ev.target;
            let files = target.files;
            if (files) {
                const formData = new FormData();
                //  console.log(files[0]);
                formData.append("file", files[0]);
                formData.append("upload_preset", "Ecommerce");
                formData.append("cloud_name", "joendambuki16");
                let x = yield fetch("https://api.cloudinary.com/v1_1/joendambuki16/image/upload", {
                    method: 'POST',
                    body: formData
                });
                let data = yield x.json();
                console.log(data.url);
                let someone = {
                    Name: data.url,
                    Email: "gichukicynthia1@gmail.com",
                    Destination: "China",
                    TravelDate: "2023/03/03"
                };
                yield fetch('http://localhost:4000/flights', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(someone)
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    });
};
