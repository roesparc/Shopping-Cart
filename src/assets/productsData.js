const productFactory = (id, name, color, price, description, image) => ({
  id,
  name,
  color,
  price,
  description,
  image,
});

const products = [
  productFactory(
    0,
    "Two-Pack",
    "Beige",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_beige.jpg")
  ),
  productFactory(
    1,
    "Two-Pack",
    "Blue",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_blue.jpg")
  ),
  productFactory(
    2,
    "Two-Pack",
    "Grey",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_grey.jpg")
  ),
  productFactory(
    3,
    "Two-Pack",
    "Pink",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_pink.jpg")
  ),
  productFactory(
    4,
    "Two-Pack",
    "White",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_white.jpg")
  ),
  productFactory(
    5,
    "Two-Pack",
    "Yellow",
    21.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/2pack_yellow.jpg")
  ),
  productFactory(
    6,
    "Three-Pack",
    "Black",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_black.jpg")
  ),
  productFactory(
    7,
    "Three-Pack",
    "Blue",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_blue.jpg")
  ),
  productFactory(
    8,
    "Three-Pack",
    "Brown",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_brown.jpg")
  ),
  productFactory(
    9,
    "Three-Pack",
    "Pink",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_pink.jpg")
  ),
  productFactory(
    10,
    "Three-Pack",
    "Violet",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_violet.jpg")
  ),
  productFactory(
    11,
    "Three-Pack",
    "White",
    29.99,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.",
    require("./img/products/3pack_white.jpg")
  ),
];

export default products;
