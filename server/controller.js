function viewInventory(req, res) {
    const db = req.app.get('db');

    db.view_inventory()
    .then(inventory => res.status(200).json(inventory))
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}


module.exports = {
    viewInventory
}