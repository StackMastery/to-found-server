import jwt from 'jsonwebtoken'

const isProduction = process.env.NODE_ENV === 'production';
// Create a new Token 
const authUserToken = async (req, res) => {

    const { uid } = req.body
    
    try{
        if(!uid){
            return res.status(400).send({error: 'must give uid'})
        }
        const token = await jwt.sign({uid: uid}, process.env.JWT_SECRET, {expiresIn: '1day'})

        return res.cookie('token', token, {
            httpOnly: true,
            secure: false,
        }).send({succes: true})
    }
    catch{
        res.status(400).send({succes: false})
    }
}

// Logout
const AuthLogout = (req, res) => {
    res.clearCookie('token', {
        sameSite: isProduction ? 'None' : 'Lax',
        secure: process.env.NODE_ENV === 'production', 
    })
    .send({ success: true });
}

export { authUserToken, AuthLogout }