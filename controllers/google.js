const redirectUrl = process.env.NODE_ENV === "PRODUCTION" ? "/google" : "http://localhost:5173/google"

const loginGoogle = (req, res) => {
    const token = req.user.createJwt()
    res.cookie("token", token, {expires : new Date(Date.now() + 1000*60*60*24)});
    res.redirect(redirectUrl);
}

module.exports = {loginGoogle}