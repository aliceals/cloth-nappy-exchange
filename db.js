const wantData = require('./wanter.json')
const haveData = require('./donator.json')
const fs = require('fs')

function returnDonators() {
    return haveData.donator
}

function returnWanters() {
    return wantData.wanter
}

function createWanter(newWanter) {
    wantData.wanter.push(newWanter)

    let editedData = JSON.stringify(wantData, null, 2)

    fs.writeFileSync('wanter.json', editedData)
}

function createDonor(newDonator) {
    haveData.donator.push(newDonator)

    let editedData = JSON.stringify(haveData, null, 2)

    fs.writeFileSync('donator.json', editedData)
}



module.exports = {
    createWanter: createWanter,
    createDonor: createDonor,
    returnDonators: returnDonators,
    returnWanters: returnWanters
}