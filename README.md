<h1 align="center">devHouse API</h1>
<br />

# :pushpin: Index
- Routes
  - [GET](#camera_flash-project-media)
  - [POST](#camera_flash-project-media)
  - [PUT](#camera_flash-project-media)
  - [DELETE](#camera_flash-project-media)
- [About](#monocle_face-about)
- [Technologies](#rocket-tecnologias-usadas)
- [Autor](#closed_book-author)
<br />
---
# :package: Routes

### These prints were taken using postman!
The routes were created using route params, query params and headers.  
Some of the routes use user id verification in the request header.

---

## :file_folder: GET

Get created houses by user.
![Imagem do projeto](src/assets/get_dashboard.png)

Get reserves made by user.
![Imagem do projeto](src/assets/get_reserves.png)

Get houses depend on status.
![Imagem do projeto](src/assets/get_house.png)

## :file_folder: POST
Reserve house.
![Imagem do projeto](src/assets/post_house_reserve.png)

Create house.
![Imagem do projeto](src/assets/post_house2.png)

Create house - Invalid body request
![Imagem do projeto](src/assets/post_houses.png)

Login by email - Invalid email
![Imagem do projeto](src/assets/post_session.png)

Login by email
![Imagem do projeto](src/assets/post_sessions2.png)

## :file_folder: PUT
Updated house.
![Imagem do projeto](src/assets/put_house.png)

Update house - Invalid body request
![Imagem do projeto](src/assets/put_house2.png)

## :file_folder: DELETE
Delete Reserve
![Imagem do projeto](src/assets/delete_cancel_reserve.png)

Delete House
![Imagem do projeto](src/assets/delete_house.png)

Delete House - Invalid user_id header request
![Imagem do projeto](src/assets/delete_house2.png)


<br />

---
# :monocle_face: About
This project was developed with the intention of being a robust API that can create, read, update, delete and reserve houses. All this using several validations and also using Yup.
<br />

---

# :rocket: Technologies
This project was developed with the following technologies: <br>
- :heavy_check_mark: **NodeJS**
- :heavy_check_mark: **Express**
- :heavy_check_mark: **MongoDB**
- :heavy_check_mark: **Mongoose**
- :heavy_check_mark: **Multer**
- :heavy_check_mark: **CORS**
- :heavy_check_mark: **Yup**
- :heavy_check_mark: **Sucrase**
<br><br>
<br />

---

# :closed_book: Author
By Patrick Morais.
### :link: LinkedIn: https://www.linkedin.com/in/patrick-morais/