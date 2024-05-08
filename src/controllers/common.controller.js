const homeController = (req, res) => {
  res.render('pages/home', { title: 'Home' });
};

const aboutController = (req, res) => {
  res.render('pages/about', { title: 'About' });
};

export { homeController, aboutController };
