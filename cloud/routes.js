// Index
app.get('/', function(req, res) {
    res.render('index', {loginMessage: '', RegisterMessage: '', typeStatus: '',  infoUser: ''});
});
// Request Password
app.get('/users/forgot-password', function(req, res) {
    res.render('reset_password', { resetPass: '', typeStatus: '', infoUser: ''});
});

// Request the Log in passing the email and password
app.post('/users/login', function(req, res) {
    var infoUser = req.body;
    
  Parse.User.logIn(infoUser.usernameLogin, infoUser.passwordLogin, {
      success: function(user) {
        res.render('index', { loginMessage: "User logged!", RegisterMessage: '', typeStatus: "success",  infoUser: infoUser});
      },
      error: function(user, error) {
        res.render('index', { loginMessage: error.message, RegisterMessage: '', typeStatus: "danger",  infoUser: infoUser});
      }
  });

});

// Register the user passing the email, password and email
app.post('/users/register', function(req, res) {
    var infoUser = req.body;
    
  var user = new Parse.User();
  user.set("username", infoUser.usernameRegister);
  user.set("password", infoUser.passwordRegister);
  user.set("email", infoUser.emailRegister);

  user.signUp(null, {
    success: function(user) {
      res.render('index', { loginMessage : '', RegisterMessage: "User created!", typeStatus: "success",  infoUser: infoUser});
    },
    error: function(user, error) {
      res.render('index', { loginMessage : '', RegisterMessage: error.message, typeStatus: "danger",  infoUser: infoUser});
    }
  });
});

// Request the Password reset passing the email
app.post('/users/forgot-password', function(req, res) {
    var infoUser = req.body;
    
  Parse.User.requestPasswordReset(infoUser.email, {
    success: function(user) {
      console.log(user);
      res.render('reset_password', { resetPass: "Check your email!", typeStatus: "success", infoUser: infoUser});
    },
    error: function(error) {
      res.render('reset_password', { resetPass: error.message, typeStatus: "danger", infoUser: infoUser});
    }
  });
});

// Subscribe User
app.get('/contact', function(req, res) {
  res.render('register-personal-info', { typeStatus: '', infoUser: '', Message: ''});
});

app.post('/contact', function(req, res) {
  var ContactClass = Parse.Object.extend("Contact");
  var Contact = new ContactClass();

  var infoUser = req.body;

  Contact.set("firstName", infoUser.firstNameContact);
  Contact.set("phone", infoUser.phoneContact);
  Contact.set("kindMovie", infoUser.selectMovies);

  Contact.save()
  .then((results) => {
    res.render('register-personal-info', { typeStatus: "success", infoUser: "", Message: "Contact created!"});
  }, (error) => {
    res.render('register-personal-info', { typeStatus: "error", infoUser: infoUser, Message: error.message});
  });
});