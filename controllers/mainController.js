exports.getIndex = (req, res) => {
  const data = {
    title: 'Cofee Shop',
    description:
      'Welcome to our house of coffee! We Hope you enjoy our broad selection of premium coffee from all over the world.',
  };
  res.status(200).render('home', data);
};
