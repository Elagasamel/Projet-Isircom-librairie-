const Users = require('../models/userModel')

const userCtrl = {
    register: async (req, res) => {
        try {
            res.json({msg: "Regiter test"})
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}