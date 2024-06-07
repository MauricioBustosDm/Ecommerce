const homeController = (req, res) => {
  res.render('pages/home', { title: 'Home' });
};

const aboutController = (req, res) => {
  res.render('pages/about', { title: 'About' });
};

const shopController = (req, res) => {
  res.render('pages/shop', { title: 'Shop' });
};

const productDetailsController = (req, res) => {
  res.render('pages/product', { title: 'Shop' });
};

const contactUsController = (req, res) => {
  res.render('pages/contactUs', { title: 'Contact Us' });
};

export {
  homeController,
  aboutController,
  shopController,
  productDetailsController,
  contactUsController,
};
