'use strict'

const Pinjam = use('App/Models/Pinjam');

class PinjamController {
    async store({request, response}) {

        const dataPinjam = request.only(['buku_id'])
        const pinjamBaru = new Pinjam
        pinjamBaru.buku_id = dataPinjam.buku_id
        await pinjamBaru.save()

        return response.status(200).json({
            message: 'Data berhasil disimpan'
        })

    }
}

module.exports = PinjamController
