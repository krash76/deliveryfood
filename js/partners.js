const partners = () => {
  const cardsRestaurants = document.querySelector(".cards-restaurants");
  console.dir(cardsRestaurants);

  const renderItems = (data) => {
    data.forEach((item) => {
      const { name, time_of_delivery, stars, price, kitchen, image, products } =
        item;
      const a = document.createElement("a");
      a.setAttribute("href", "/restaurant.html");
      a.classList.add("card");
      a.classList.add("card-restaurant");
      a.dataset.products = products;

      a.innerHTML = `<img
                src="${image}"
                alt="${name}"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                  <div class="rating">${stars}</div>
                  <div class="price">От ${price} ₽</div>
                  <div class="category">${kitchen}</div>
                </div>
                <!-- /.card-info -->
              </div>
              <!-- /.card-text -->`;

      a.addEventListener("click", (e) => {
        e.preventDefault();

        localStorage.setItem("restaurant", JSON.stringify(item));
        window.location.href = "/restaurant.html";
      });

      cardsRestaurants.append(a);
    });
  };

  fetch(
    `https://deliveryfood-d0721-default-rtdb.firebaseio.com/db/partners.json`
  )
    .then((responce) => responce.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

partners();
