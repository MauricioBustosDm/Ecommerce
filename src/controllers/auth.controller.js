const signInController = (req, res) => {
  res.render('pages/signIn');
};

const signUpController = (req, res) => {
  res.render('pages/signUp');
};

export { signInController, signUpController };
