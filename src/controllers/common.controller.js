const homeController = (req, res) => {
  res.render('pages/home');
};

const aboutController = (req, res) => {
  res.render('pages/about');
};

export { homeController, aboutController };
