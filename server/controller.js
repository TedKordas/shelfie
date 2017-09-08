module.exports = {
    getAllBins: (req, res) => {
        req.app.get('db').getAllBins().then(bins => {
            res.status(200).send(bins)
        }).catch(err => console.log(err))
    },
    getAllShelves: (req, res) => {
        req.app.get('db').getAllShelves().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => console.log(err))
    },
    getShelfA: (req, res) => {
        req.app.get('db').getShelfA().then(bins => {
            res.status(200).send(bins)
        }).catch(err => console.log(err))
    },
    getShelfB: (req, res) => {
        req.app.get('db').getShelfB().then(bins => {
            res.status(200).send(bins)
        }).catch(err => console.log(err))
    },
    getShelfC: (req, res) => {
        req.app.get('db').getShelfC().then(bins => {
            res.status(200).send(bins)
        }).catch(err => console.log(err))
    },
    getShelfD: (req, res) => {
        req.app.get('db').getShelfD().then(bins => {
            res.status(200).send(bins)
        }).catch(err => console.log(err))
    }
}